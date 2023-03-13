import express, { Request, Response } from 'express';
import * as countryModel from '../models/country.model';
import { Country } from '../types/country';

const countryRouter = express.Router();

countryRouter.get('/', async (req: Request, res: Response) => {
    countryModel.findAll((err: Error, countries: Country[]) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ countries: countries });
    });
});

countryRouter.post('/', async (req: Request, res: Response) => {
    const country: Country = req.body;
    countryModel.create(country, (err: Error, countryId: number) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ countryId: countryId });
    });
});

countryRouter.get('/:code', async (req: Request, res: Response) => {
    countryModel.findByCode(req.params.code, (err: Error, country: Country) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ country: country });
    });
});

export default countryRouter;
