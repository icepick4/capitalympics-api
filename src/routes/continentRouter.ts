import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { DefaultLang, Languages, t } from '../utils/common';

const continentRouter = express.Router();

continentRouter.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang)
    });

    const result = QuerySchema.safeParse(req.query);
    const lang = result.success ? result.data.lang : DefaultLang;

    const continentsFromDB = await prisma.continent.findMany();
    const continents = continentsFromDB.map((continent) => ({
        ...continent,
        name: t(continent.name, lang)
    }));

    res.status(200).json({ success: true, continents });
});

export default continentRouter;
