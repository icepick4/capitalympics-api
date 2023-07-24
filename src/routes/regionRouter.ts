import express, { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../prisma';
import { DefaultLang, Languages, t } from '../utils/common';

const regionRouter = express.Router();

regionRouter.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang)
    });

    const result = QuerySchema.safeParse(req.query);
    const lang = result.success ? result.data.lang : DefaultLang;

    const regionsFromDB = await prisma.region.findMany();
    const regions = regionsFromDB.map((region) => ({
        ...region,
        name: t(region.name, lang)
    }));

    res.status(200).json({ success: true, regions });
});

export default regionRouter;
