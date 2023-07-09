import { PrismaClient } from '@prisma/client';
import { CONTINENTS } from './data';
const prisma = new PrismaClient();


async function truncate(...tables: string[])
{
    for (const table of tables) {
        await prisma.$queryRawUnsafe(`TRUNCATE TABLE ${table}`);
        await prisma.$queryRawUnsafe(`ALTER TABLE ${table} AUTO_INCREMENT = 1;`);
    }
}

async function main() {
    // Truncate Continent
    await truncate('Region', 'Continent');
    const continents: Record<string, number> = {};
    const regions: Record<string, number> = {};

    for (const continent of CONTINENTS) {
        const insertedContinent = await prisma.continent.create({ data: { name: continent.name } });
        continents[continent.name.en] = insertedContinent.id;

        for (const region of continent.regions) {
            const insertedRegion = await prisma.region.create({ data: {
                name: region,
                continent_id: insertedContinent.id
            }});

            regions[region.en] = insertedRegion.id;
        }
    }

    console.log(regions, continents);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
