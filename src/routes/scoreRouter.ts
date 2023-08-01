import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { DefaultLang, Languages, LearningTypes } from '../utils/common';
import {
    calculateScore,
    getOverallScores,
    getUserResultsCounters
} from '../utils/scores';

const scoreRouter = express.Router();

scoreRouter.get('', async (req: Request, res: Response) => {
    const querySchema = z.object({
        continent: z.number().positive().optional(),
        type: z.enum(LearningTypes)
    });

    const result = querySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).json({ success: false, error: result.error });
    }

    const scores = await getUserResultsCounters(
        req.app.get('auth').id,
        result.data.type,
        result.data.continent
    );

    scores.map(
        (s) => (s.score = calculateScore(s.succeeded, s.medium, s.failed))
    );

    res.status(200).json({ success: true, scores });
});

scoreRouter.get('/raw', async (req: Request, res: Response) => {
    const bodySchema = z.object({
        type: z.enum(LearningTypes).optional(),
        lang: z.enum(Languages).default(DefaultLang)
    });

    const result = bodySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(406).json({ success: false, error: result.error });
    }

    const scores = await prisma.questionResult.findMany({
        where: {
            user_id: parseInt(req.app.get('auth').id),
            learning_type: result.data.type
        },
        orderBy: {
            created_at: 'desc'
        },
        select: {
            learning_type: true,
            result: true,
            created_at: true,
            country_id: true
        }
    });

    res.status(200).json({ success: true, scores });
});

scoreRouter.get('/overall', async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        scores: await getOverallScores(req.app.get('auth').id)
    });
});

scoreRouter.post('/reset', async (req: Request, res: Response) => {
    const { id } = req.app.get('auth');

    await prisma.questionResult.deleteMany({
        where: {
            user_id: parseInt(id)
        }
    });

    res.status(200).json({ success: true });
});

export default scoreRouter;
