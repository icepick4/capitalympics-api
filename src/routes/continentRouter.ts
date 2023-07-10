import { Continent, PrismaClient, Region } from '@prisma/client';
import express, { Request, Response } from 'express';
import { z } from 'zod';
import { DefaultLang, Lang, Languages, t } from '../utils/common';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const QuerySchema = z.object({
        lang: z.enum(Languages).default(DefaultLang)
    });

    const result = QuerySchema.safeParse(req.query);
    if (!result.success) {
        return res.status(406).send({ success: false, data: result.error });
    }

    const lang: Lang = result.data.lang;
    const continents = await prisma.continent.findMany({
        include: { regions: true }
    });

    const mappedContinents = continents.map(
        (
            continent: Continent & {
                regions: Region[];
            }
        ) => ({
            ...continent,
            name: t(continent.name, lang),
            regions: continent.regions.map((region: Region) => ({
                id: region.id,
                name: t(region.name, lang)
            }))
        })
    );

    return res.status(200).json({ success: true, data: mappedContinents });
});

export default router;
