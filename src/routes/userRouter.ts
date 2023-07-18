import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { z } from 'zod';
import { AuthMiddleware } from '../utils/authMiddlewares';
import {
    DefaultLang,
    Languages,
    LearningType,
    LearningTypes,
    calculateScore,
    getNewCountryToPlay,
    hashPassword,
    t
} from '../utils/common';

const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const prisma = new PrismaClient();

const getScores = async (
    id: number,
    type: LearningType,
    continent: number | undefined
) => {
    let scores = [];
    if (continent === undefined) {
        scores = await prisma.questionResult.groupBy({
            by: ['country_id', 'result'],
            where: {
                user_id: id,
                learning_type: type
            },
            _count: {
                result: true
            }
        });
    } else {
        scores = await prisma.questionResult.groupBy({
            by: ['country_id', 'result'],
            where: {
                user_id: id,
                learning_type: type,
                country: {
                    region: {
                        continent_id: continent
                    }
                }
            },
            _count: {
                result: true
            }
        });
    }

    const scoreResults: { id: number; [key: string]: number }[] = [];

    const countriesCount = continent
        ? await prisma.country.count({
              where: {
                  region: {
                      continent_id: continent
                  }
              }
          })
        : await prisma.country.count();

    const arrayCountries = Array.from(Array(countriesCount).keys());

    scores.forEach((score) => {
        const countryId = score.country_id;
        const result = score.result;

        const existingScore = scoreResults.find(
            (item) => item.id === countryId
        );
        if (existingScore) {
            existingScore[result] = score._count.result;
        } else {
            const newScore = {
                id: countryId,
                succeeded: 0,
                medium: 0,
                failed: 0
            };
            newScore[result] = score._count.result;
            scoreResults.push(newScore);
        }
    });
    arrayCountries.forEach((countryId) => {
        const existingScore = scoreResults.find(
            (item) => item.id === countryId + 1
        );
        if (!existingScore) {
            scoreResults.push({
                id: countryId + 1,
                score: 0,
                succeeded: 0,
                medium: 0,
                failed: 0
            });
        }
    });
    return scoreResults;
};

userRouter.get('/', async (req: Request, res: Response) => {
    const count = await prisma.user.count();
    res.status(200).json({ success: true, count });
});

userRouter.get(
    '/scores',
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const querySchema = z.object({
            type: z.enum(LearningTypes),
            continent: z
                .preprocess(Number, z.number().nonnegative())
                .default(-1)
                .optional(),
            lang: z.enum(Languages).default(DefaultLang)
        });

        const result = querySchema.safeParse(req.query);
        if (!result.success) {
            return res
                .status(406)
                .json({ success: false, error: result.error });
        }

        const { id } = req.app.get('auth');

        const { type, continent, lang } = result.data;

        const scoreResults = await getScores(id, type, continent);

        const mappedScores = scoreResults.map((score) => ({
            id: score.id,
            score: calculateScore(
                score['succeeded'],
                score['medium'],
                score['failed']
            ),
            name: '',
            flag: ''
        }));

        const countries = await prisma.country.findMany({
            where: {
                id: {
                    in: mappedScores.map((score) => score.id)
                }
            },
            select: {
                id: true,
                code: true,
                name: true,
                flag: true
            }
        });

        if (!countries) {
            return res
                .status(404)
                .json({ success: false, error: 'Countries not found' });
        }

        mappedScores.forEach((score) => {
            const country = countries.find(
                (country) => country.id === score.id
            );
            if (country) {
                score.name = t(country.name, lang)!;
                score.flag = country.flag;
            }
        });

        res.status(200).json({ success: true, scores: mappedScores });
    }
);

userRouter.get('/play', AuthMiddleware, async (req: Request, res: Response) => {
    const querySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang),
        continent: z
            .preprocess(Number, z.number().nonnegative())
            .default(-1)
            .optional(),
        type: z.enum(LearningTypes)
    });

    const resultQuery = querySchema.safeParse(req.query);
    if (!resultQuery.success) {
        return res
            .status(406)
            .json({ success: false, error: resultQuery.error });
    }

    const { lang, continent, type } = resultQuery.data;
    const { id } = req.app.get('auth');

    const scores = await getScores(id, type, continent);

    for (const score in scores) {
        scores[score].score = calculateScore(
            scores[score]['succeeded'],
            scores[score]['medium'],
            scores[score]['failed']
        );
        delete scores[score]['succeeded'];
        delete scores[score]['medium'];
        delete scores[score]['failed'];
    }

    const newCountryId = getNewCountryToPlay(scores);

    const newCountry = await prisma.country.findUnique({
        where: {
            id: newCountryId
        }
    });

    if (!newCountry) {
        return res
            .status(404)
            .json({ success: false, error: 'Country not found' });
    }

    const finalCountry = {
        id: newCountry.id,
        code: newCountry.code,
        name: t(newCountry.name, lang),
        capital: t(newCountry.capital, lang),
        flag: newCountry.flag
    };

    res.status(200).json({ success: true, country: finalCountry });
});

userRouter.post('/', async (req: Request, res: Response) => {
    const bodySchema = z.object({
        user: z.object({
            name: z.string().min(3).max(20),
            password: z.string().min(8).max(20),
            updated_at: z.string().optional(),
            language: z.enum(Languages).default(DefaultLang)
        })
    });
    const result = bodySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(406).send({ success: false, error: result.error });
    }

    const { user } = result.data;

    const userCount = await prisma.user.count({
        where: {
            name: user.name
        }
    });

    if (userCount > 0) {
        return res
            .status(409)
            .json({ success: false, error: 'User already exists' });
    }

    const passwordHash = await hashPassword(user.password);

    const newUser = await prisma.user.create({
        data: {
            name: user.name,
            password: passwordHash,
            updated_at: user.updated_at,
            language: user.language
        }
    });

    return res.status(200).json({ success: true, user: newUser });
});

userRouter.put('/', AuthMiddleware, async (req: Request, res: Response) => {
    const bodySchema = z.object({
        user: z.object({
            id: z.number(),
            name: z.string().min(3).max(20),
            updated_at: z.string().optional(),
            language: z.enum(Languages).default(DefaultLang)
        })
    });
    const result = bodySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(406).send({ success: false, error: result.error });
    }

    const { user } = result.data;

    const userCount = await prisma.user.count({
        where: {
            name: user.name,
            id: {
                not: user.id
            }
        }
    });

    if (userCount > 0) {
        return res
            .status(409)
            .json({ success: false, error: 'User already exists' });
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: user.name,
            updated_at: DateTime.now().toISO(),
            language: user.language
        }
    });

    return res.status(200).json({ success: true, user: updatedUser });
});

export default userRouter;
