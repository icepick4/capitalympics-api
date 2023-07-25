import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { LearningTypes, Scores } from '../utils/common';
import {
    calculateScore,
    getPlayableCountryId,
    getUserResultsCounters
} from '../utils/scores';

const questionRouter = express.Router();

async function getUnplayedCountries(
    playedCountries: number[],
    continent?: number
): Promise<number[]> {
    const wheres = [
        playedCountries.length > 0
            ? `c.id NOT IN (${playedCountries.join(',')})`
            : undefined,
        continent ? `r.continent_id = ${continent}` : undefined
    ].filter((w) => w !== undefined);

    const joins = [
        continent ? `LEFT JOIN Region AS r ON c.region_id = r.id` : undefined
    ].filter((j) => j !== undefined);

    const query = `
        SELECT c.id
        FROM Country AS c
        ${joins.join(' ')}
        WHERE ${wheres.length ? wheres.join(' AND ') : '1'}
    `;

    const results: { id: number }[] = await prisma.$queryRawUnsafe(query);

    return results.map((r) => Number(r.id));
}

questionRouter.get('/next', async (req: Request, res: Response) => {
    const querySchema = z.object({
        continent: z.preprocess(Number, z.number().nonnegative()).optional(),
        type: z.enum(LearningTypes)
    });

    const result = querySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).json({ success: false, error: result.error });
    }

    const userScores = await getUserResultsCounters(
        req.app.get('auth').id,
        result.data.type,
        result.data.continent
    );

    const countriesAlreadyPlayed = userScores.map((s) => s.country_id);
    const countriesNeverPlayed = await getUnplayedCountries(
        countriesAlreadyPlayed,
        result.data.continent
    );

    const country = getPlayableCountryId([
        ...userScores,
        ...countriesNeverPlayed.map((country_id) => ({
            user_id: req.app.get('auth').id,
            country_id,
            learning_type: result.data.type,
            succeeded: 0,
            medium: 0,
            failed: 0
        }))
    ]);

    res.status(200).json({ success: true, country });
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

    const { type, country_id: countryId, result: questionResult } = result.data;
    const userId = parseInt(req.app.get('auth').id);

    const oldCounters = await getUserResultsCounters(
        userId,
        type,
        undefined,
        countryId
    );

    await prisma.questionResult.create({
        data: {
            user_id: userId,
            country_id: countryId,
            learning_type: type,
            result: questionResult
        }
    });

    if (oldCounters.length === 0) {
        return res.status(200).json({ success: true });
    }

    const oldScore = calculateScore(
        oldCounters[0].succeeded,
        oldCounters[0].medium,
        oldCounters[0].failed
    );

    const currentScore = calculateScore(
        questionResult === 'succeeded'
            ? oldCounters[0].succeeded + 1
            : oldCounters[0].succeeded,
        questionResult === 'medium'
            ? oldCounters[0].medium + 1
            : oldCounters[0].medium,
        questionResult === 'failed'
            ? oldCounters[0].failed + 1
            : oldCounters[0].failed
    );

    const previousTens = Math.floor(oldScore / 10);
    const currentTens = Math.floor(currentScore / 10);

    if (previousTens < currentTens) {
        return res
            .status(200)
            .json({ success: true, level: 'up', score: currentScore });
    } else if (previousTens > currentTens) {
        return res.status(200).json({
            success: true,
            level: 'down',
            score: currentScore
        });
    }
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
