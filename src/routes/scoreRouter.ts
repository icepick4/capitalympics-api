import express, { Request, Response } from 'express';
import { z } from 'zod';
import { LearningTypes } from '../utils/common';
import { getOverallScores, getScores } from '../utils/scores';

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

    const scores = await getScores(
        req.app.get('auth').id,
        result.data.type,
        result.data.continent
    );

    res.status(200).json({ success: true, scores });
});

scoreRouter.get('/overall', async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        scores: await getOverallScores(req.app.get('auth').id),
    });
});

export default scoreRouter;