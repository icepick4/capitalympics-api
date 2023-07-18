import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { z } from 'zod';
import * as userModel from '../models/user.model';
import { AuthMiddleware } from '../utils/authMiddlewares';
import {
    DefaultLang,
    Languages,
    LearningTypes,
    calculateScore,
    getNewCountryToPlay,
    hashPassword,
    t
} from '../utils/common';

const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const prisma = new PrismaClient();

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
                .optional()
        });

        const result = querySchema.safeParse(req.query);
        if (!result.success) {
            return res
                .status(406)
                .json({ success: false, error: result.error });
        }

        const { id } = req.app.get('auth');

        const { type, continent } = result.data;

        const scores = await userModel.getScores(id, type, continent);

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

        res.status(200).json({ success: true, scores });
    }
);

userRouter.get('/play', AuthMiddleware, async (req: Request, res: Response) => {
    const querySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang),
        continent: z.preprocess(Number, z.number().nonnegative()).default(-1),
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

    const scores = await userModel.getScores(id, type, continent);

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
        },
        include: {
            region: true,
            countryCurrencies: true
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
