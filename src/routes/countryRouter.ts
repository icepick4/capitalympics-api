import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { z } from 'zod';
import { Languages, t } from '../utils/common';

const countryRouter = express.Router();
const prisma = new PrismaClient();

countryRouter.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        max: z
            .string()
            .transform((value) => Number(value))
            .refine((value) => !isNaN(value) && value > 0, {
                message: 'The max parameter must be a positive number'
            })
            .optional(),
        lang: z.enum(Languages).default('en')
    });

    const result = QuerySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).send(result.error);
    }

    const { lang, max } = result.data;

    try {
        const countries = await prisma.country.findMany({
            take: max ?? undefined,
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

        const mappedCountries = countries.map((country) => ({
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
        }));

        res.status(200).json({ countries: mappedCountries });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

countryRouter.get('/:code', async (req: Request, res: Response) => {
    //get code in params and lang in query with zod
    const ParamsSchema = z.object({
        code: z.string().length(3)
    });

    const QuerySchema = z.object({
        lang: z.enum(Languages).default('en')
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

        res.status(200).json(finalCountry);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default countryRouter;
