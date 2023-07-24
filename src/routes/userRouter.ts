import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { DefaultLang, Languages, hashPassword } from '../utils/common';

const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    const count = await prisma.user.count();
    res.status(200).json({ success: true, count });
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
    const passwordHash = await hashPassword(user.password);

    const existingUser = await prisma.user.findUnique({
        where: {
            name: user.name
        }
    });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            error: 'User already exists'
        });
    }

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

export default userRouter;
