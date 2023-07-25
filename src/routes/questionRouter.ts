import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { LearningTypes, Scores } from '../utils/common';
import { getPlayableCountryId, getScores } from '../utils/scores';

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

    const userScores = await getScores(
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
            score: 0
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

    const { type, country_id: countryId } = result.data;
    const userId = parseInt(req.app.get('auth').id);

    const [previousScore, currentScore] = await Promise.all([
        getScores(userId, type, undefined, countryId),
        prisma.questionResult
            .create({
                data: {
                    user_id: userId,
                    country_id: countryId,
                    learning_type: type,
                    result: result.data.result
                }
            })
            .then(() => getScores(userId, type, undefined, countryId))
    ]);

    if (previousScore.length === 0) {
        return res.status(200).json({ success: true });
    }

    const previousTens = Math.floor(previousScore[0].score / 10);
    const currentTens = Math.floor(currentScore[0].score / 10);

    if (previousTens < currentTens) {
        return res
            .status(200)
            .json({ success: true, level: 'up', score: currentScore[0].score });
    } else if (previousTens > currentTens) {
        return res.status(200).json({
            success: true,
            level: 'down',
            score: currentScore[0].score
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
