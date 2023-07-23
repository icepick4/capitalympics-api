import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { z } from 'zod';
import { DefaultLang, Languages, LearningTypes, Scores } from '../utils/common';

const prisma = new PrismaClient();
const questionRouter = express.Router();

questionRouter.get('/next', async (req: Request, res: Response) => {
    const querySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang),
        continent: z
            .preprocess(Number, z.number().nonnegative())
            .default(-1)
            .optional(),
        type: z.enum(LearningTypes)
    });

    const result = querySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).json({ success: false, error: result.error });
    }

    const { lang, continent, type } = result.data;
});

questionRouter.post('', async (req: Request, res: Response) => {
    const BodySchema = z.object({
        country_id: z.number().positive(),
        result: z.enum(Scores),
        type: z.enum(LearningTypes)
    });

    const result = BodySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(406).json({ success: false, error: result.error });
    }

    await prisma.questionResult.create({
        data: {
            user_id: parseInt(req.app.get('auth').id),
            country_id: result.data.country_id,
            learning_type: result.data.type,
            result: result.data.result
        }
    });

    return res.status(200).json({ success: true });
});

questionRouter.delete('', async (req: Request, res: Response) => {
    const { id } = req.app.get('auth');

    await prisma.questionResult.deleteMany({
        where: {
            user_id: parseInt(id)
        }
    });

    return res.status(200).json({ success: true });
});

export default questionRouter;
