import express, { Request, Response } from 'express';
import { z } from 'zod';
import * as countryModel from '../models/country.model';
import { Country } from '../types/country';
import { Lang, Languages } from '../utils/common';

const countryRouter = express.Router();

countryRouter.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        max: z.string().transform(value => Number(value))
            .refine(value => !isNaN(value) && value > 0, { message: 'The max parameter must be a positive number' })
            .optional(),
        lang: z.enum(Languages).default('en'),
    });

    const result = QuerySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).send(result.error);
    }

    let { lang, max } = result.data;

    countryModel.findAll(lang, (err: Error, countries: Country[]) => {
        max ??= countries.length;
        const randomStart = Math.floor(Math.random() * (countries.length - max));

        if (max != countries.length) {
            countries = countries.slice(randomStart, randomStart + max);
        }

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ countries });
    });
});

countryRouter.get('/:code', async (req: Request, res: Response) => {
    const lang: Lang = (req.query.lang as Lang|undefined) ?? 'en';

    countryModel.findByCode(
        req.params.code,
        lang,
        (err: Error|null, country: Country) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json({ country });
        }
    );
});

export default countryRouter;
