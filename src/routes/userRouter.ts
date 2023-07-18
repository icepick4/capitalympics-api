import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { z } from 'zod';
import * as userModel from '../models/user.model';
import { Country } from '../types/country';
import { User } from '../types/user';
import { tokenMiddleware } from '../utils/authMiddlewares';
import {
    DefaultLang,
    DefaultLearningType,
    DefaultRegion,
    Languages,
    LearningTypes,
    Regions,
    Scores,
    hashPassword
} from '../utils/common';

const jwt = require('jsonwebtoken');
const userRouter = express.Router();
const prisma = new PrismaClient();

userRouter.get('/', async (req: Request, res: Response) => {
    const count = await prisma.user.count();
    res.status(200).json({ success: true, count });
});

userRouter.get(
    '/:id/:learning_type/scores',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const learning_type: string = req.params.learning_type;
        let max: number;
        if (req.query.max) {
            max = parseInt(req.query.max as string);
        }
        let sort: string;
        if (req.query.sort) {
            sort = req.query.sort as string;
        } else {
            sort = 'DESC';
        }
        const querySchema = z.object({
            sort: z.string().optional()
        });
        const paramsSchema = z.object({
            id: z.string().nonempty(),
            learning_type: z.string().nonempty()
        });

        const result = querySchema.safeParse(req.query);
        if (!result.success) {
            return res
                .status(406)
                .json({ success: false, error: result.error });
        }
        const resultParams = paramsSchema.safeParse(req.params);
        if (!resultParams.success) {
            return res
                .status(406)
                .json({ success: false, error: resultParams.error });
        }

        return res.status(200).json({ scores: [] });
        // userModel.findAllLevels(
        //     id,
        //     sort,
        //     learning_type,
        //     (err: Error, scores: Array<UserScore>) => {
        //         max = max ? max : scores.length;
        //         if (err) {
        //             return res.status(500).json({ error: err.message });
        //         }
        //         res.status(200).json({ scores: scores.slice(0, max) });
        //     }
        // );
    }
);

userRouter.get(
    '/:id/country/play/:learning_type',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const querySchema = z.object({
            lang: z.enum(Languages).default(DefaultLang),
            region: z.enum(Regions).default(DefaultRegion)
        });
        const paramsSchema = z.object({
            id: z.string().nonempty(),
            learning_type: z.string().nonempty()
        });

        const result = querySchema.safeParse(req.query);
        if (!result.success) {
            return res
                .status(406)
                .json({ success: false, error: result.error });
        }
        const resultParams = paramsSchema.safeParse(req.params);
        if (!resultParams.success) {
            return res
                .status(406)
                .json({ success: false, error: resultParams.error });
        }

        const { id, learning_type } = resultParams.data;

        const { lang, region } = result.data;

        userModel.findNewCountry(
            parseInt(id),
            learning_type,
            lang,
            region,
            (err: Error, country: Country) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ country: country });
            }
        );
    }
);

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

userRouter.post(
    '/init/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findOne(id, (err: Error, user: User) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            //init every user_scores for every country to -1
            // countryModel.findAll('en', (err: any, countries: Country[]) => {
            //     if (err) {
            //         return res.status(500).json({ error: err.message });
            //     } else {
            //         let completed = 0;
            //         let hasSentResponse = false;
            //         countries.forEach((country) => {
            //             userModel.createScore(
            //                 id,
            //                 user.name,
            //                 country.alpha3Code,
            //                 (err: any) => {
            //                     if (err && !hasSentResponse) {
            //                         hasSentResponse = true;
            //                         return res.status(500).json({
            //                             error: err.message
            //                         });
            //                     } else {
            //                         completed++;
            //                         if (
            //                             completed === countries.length &&
            //                             !hasSentResponse
            //                         ) {
            //                             user.flag_level = 0;
            //                             user.capital_level = 0;
            //                             userModel.update(
            //                                 user,
            //                                 id,
            //                                 (err: any) => {
            //                                     if (err) {
            //                                         return res
            //                                             .status(500)
            //                                             .json({
            //                                                 error: err.message
            //                                             });
            //                                     } else {
            //                                         hasSentResponse = true;
            //                                         return res
            //                                             .status(200)
            //                                             .send();
            //                                     }
            //                                 }
            //                             );
            //                         }
            //                     }
            //                 }
            //             );
            //         });
            //     }
            // });
        });
    }
);

userRouter.put('/:id', tokenMiddleware, async (req: Request, res: Response) => {
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

userRouter.put(
    '/:id/:country_id/:learning_type/score/:result',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const paramsSchema = z.object({
            id: z.number().nonnegative(),
            country_id: z.number().nonnegative(),
            learning_type: z.enum(LearningTypes).default(DefaultLearningType),
            result: z.enum(Scores)
        });
        const resultParams = paramsSchema.safeParse(req.params);
        if (!resultParams.success) {
            return res
                .status(406)
                .json({ success: false, error: resultParams.error });
        }

        const { id, country_id, learning_type, result } = resultParams.data;

        await prisma.questionResult.create({
            data: {
                user_id: id,
                country_id,
                learning_type,
                result
            }
        });
    }
);

userRouter.delete(
    '/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const paramsSchema = z.object({
            id: z.number().nonnegative()
        });

        const resultParams = paramsSchema.safeParse(req.params);
        if (!resultParams.success) {
            return res
                .status(406)
                .json({ success: false, error: resultParams.error });
        }

        const { id } = resultParams.data;

        await prisma.user.delete({
            where: {
                id
            }
        });

        return res.status(200).json({ success: true });
    }
);

export default userRouter;
