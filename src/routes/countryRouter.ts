import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { AuthMiddleware } from '../utils/authMiddlewares';
import {
    DefaultLang,
    Languages,
    LearningTypes,
    Scores,
    t
} from '../utils/common';
import { calculateScore, getUserResultsCounters } from '../utils/scores';

const countryRouter = express.Router();

countryRouter.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang),
        max: z.preprocess(Number, z.number().nonnegative()).optional()
    });

    const result = QuerySchema.safeParse(req.query);

    if (!result.success) {
        return res.status(406).send(result.error);
    }

    const { lang, max } = result.data;

    const countriesFromDB = await prisma.country.findMany();
    const countries = countriesFromDB.map((country) => ({
        ...country,
        name: t(country.name, lang),
        capital: t(country.capital, lang),
        official_name: t(country.official_name, lang)
    }));

    if (max) {
        countries.splice(max);
    }

    res.status(200).json({ success: true, countries });
});

countryRouter.get('/:code', async (req: Request, res: Response) => {
    const ParamsSchema = z.object({
        code: z.string().length(3)
    });

    const QuerySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang)
    });

    const paramsResult = ParamsSchema.safeParse(req.params);
    const queryResult = QuerySchema.safeParse(req.query);

    if (!paramsResult.success) {
        return res.status(406).send(paramsResult.error);
    }

    if (!queryResult.success) {
        return res.status(406).send(queryResult.error);
    }

    const { code } = paramsResult.data;
    const { lang } = queryResult.data;
    const { id } = req.app.get('auth');

    try {
        const country = await prisma.country.findUnique({
            where: {
                code
            },
            include: {
                region: {
                    include: {
                        continent: true
                    }
                },
                countryCurrencies: {
                    include: {
                        currency: true
                    }
                }
            }
        });

        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }

        const finalCountry = {
            id: country.id,
            code: country.code,
            name: t(country.name, lang),
            capital: t(country.capital, lang),
            official_name: t(country.official_name, lang),
            population: country.population,
            google_maps_link: country.google_maps_link,
            flag: country.flag,
            region: {
                id: country.region.id,
                name: t(country.region.name, lang),
                continent: {
                    id: country.region.continent.id,
                    name: t(country.region.continent.name, lang)
                }
            },
            currencies: country.countryCurrencies.map((countryCurrency) => ({
                id: countryCurrency.currency.id,
                name: countryCurrency.currency.name,
                symbol: countryCurrency.currency.symbol
            }))
        };

        if (id === undefined) {
            return res.status(200).json({
                success: true,
                country: finalCountry
            });
        }

        try {
            const [flagCounters, capitalCounters] = await Promise.all([
                getUserResultsCounters(id, 'flag', undefined, country.id),
                getUserResultsCounters(id, 'capital', undefined, country.id)
            ]);

            let flagScore = 0;
            if (flagCounters.length > 0) {
                flagScore = calculateScore(
                    flagCounters[0].succeeded,
                    flagCounters[0].medium,
                    flagCounters[0].failed
                );
            }

            let capitalScore = 0;
            if (capitalCounters.length > 0) {
                capitalScore = calculateScore(
                    capitalCounters[0].succeeded,
                    capitalCounters[0].medium,
                    capitalCounters[0].failed
                );
            }

            return res.status(200).json({
                success: true,
                country: finalCountry,
                flagScore,
                capitalScore
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'An error occurred while fetching user results.'
            });
        }
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

countryRouter.post(
    '/:country_id/score',
    [AuthMiddleware],
    async (req: Request, res: Response) => {
        const paramsSchema = z.object({
            country_id: z.preprocess(Number, z.number().nonnegative())
        });
        const bodySchema = z.object({
            result: z.enum(Scores),
            type: z.enum(LearningTypes)
        });

        const resultParams = paramsSchema.safeParse(req.params);
        if (!resultParams.success) {
            return res
                .status(406)
                .json({ success: false, error: resultParams.error });
        }

        const resultBody = bodySchema.safeParse(req.body);
        if (!resultBody.success) {
            return res
                .status(406)
                .json({ success: false, error: resultBody.error });
        }

        const { country_id } = resultParams.data;
        const { result, type } = resultBody.data;
        const { id } = req.app.get('auth');

        await prisma.questionResult.create({
            data: {
                user_id: id,
                country_id,
                learning_type: type,
                result
            }
        });

        return res.status(200).json({ success: true });
    }
);

export default countryRouter;
