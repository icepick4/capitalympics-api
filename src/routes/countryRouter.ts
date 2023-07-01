import express, { Request, Response } from 'express';
import * as countryModel from '../models/country.model';
import { Country } from '../types/country';
import { Lang } from '../utils/common';

const countryRouter = express.Router();

countryRouter.get('/', async (req: Request, res: Response) => {
    let max: number;
    if (req.query.max) {
        max = parseInt(req.query.max as string);
    }
    let lang: Lang = 'en';
    if (req.query.lang) {
        lang = req.query.lang as Lang;
    }
    countryModel.findAll(lang, (err: Error, countries: Country[]) => {
        max = max ? max : countries.length;
        const randomStart = Math.floor(
            Math.random() * (countries.length - max)
        );
        if (max != countries.length) {
            countries = countries.slice(randomStart, randomStart + max);
        }
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ countries: countries });
    });
});

// Only when need to initialize the database
// countryRouter.post('/', async (req: Request, res: Response) => {
//     const country: Country = req.body;
//     countryModel.create(country, (err: Error, countryId: number) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.status(200).json({ countryId: countryId });
//     });
// });

countryRouter.get('/:code', async (req: Request, res: Response) => {
    let lang: Lang = 'en';
    if (req.query.lang) {
        lang = req.query.lang as Lang;
    }
    countryModel.findByCode(
        req.params.code,
        lang,
        (err: Error, country: Country) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ country: country });
        }
    );
});

export default countryRouter;
