import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { z } from 'zod';
import { tokenMiddleware } from '../utils/authMiddlewares';
import {
    DefaultLang,
    DefaultRegion,
    Languages,
    LearningTypes,
    Regions,
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
    '/scores',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const querySchema = z.object({
            sort: z.string().optional(),
            type: z.enum(LearningTypes)
        });
        const bodySchema = z.object({
            id: z.number().nonnegative()
        });

        const result = querySchema.safeParse(req.query);
        if (!result.success) {
            return res
                .status(406)
                .json({ success: false, error: result.error });
        }
        const resultBody = bodySchema.safeParse(req.body);
        if (!resultBody.success) {
            return res
                .status(406)
                .json({ success: false, error: resultBody.error });
        }

        const { id } = resultBody.data;
        const { sort, type } = result.data;

        const scores = await prisma.questionResult.aggregate({
            where: {
                id,
                learning_type: type
            },
            _count: {
                result: true
            }
        });
        console.log(scores);
    }
);

userRouter.get(
    '/play',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const querySchema = z.object({
            lang: z.enum(Languages).default(DefaultLang),
            region: z.enum(Regions).default(DefaultRegion)
        });
        const bodySchema = z.object({
            id: z.number().nonnegative(),
            learning_type: z.enum(LearningTypes)
        });

        const resultQuery = querySchema.safeParse(req.query);
        if (!resultQuery.success) {
            return res
                .status(406)
                .json({ success: false, error: resultQuery.error });
        }
        const resultBody = bodySchema.safeParse(req.body);
        if (!resultBody.success) {
            return res
                .status(406)
                .json({ success: false, error: resultBody.error });
        }

        const { lang, region } = resultQuery.data;
        const { id, learning_type } = resultBody.data;

        // userModel.findNewCountry(
        //     parseInt(id),
        //     learning_type,
        //     lang,
        //     region,
        //     (err: Error, country: Country) => {
        //         if (err) {
        //             return res.status(500).json({ error: err.message });
        //         }
        //         res.status(200).json({ country: country });
        //     }
        // );
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

userRouter.put('/', tokenMiddleware, async (req: Request, res: Response) => {
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
