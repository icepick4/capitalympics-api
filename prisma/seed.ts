import prisma from '../src/prisma';
import { CONTINENTS, COUNTRIES, CURRENCIES } from './data';

async function truncate(...tables: string[]) {
    for (const table of tables) {
        await prisma.$queryRawUnsafe(`TRUNCATE TABLE ${table}`);
        await prisma.$queryRawUnsafe(
            `ALTER TABLE ${table} AUTO_INCREMENT = 1;`
        );
    }
    await prisma.$queryRawUnsafe(`DROP VIEW IF EXISTS vw_user_scores;`);
    await prisma.$queryRawUnsafe(`CREATE VIEW vw_user_scores AS
    SELECT
        user_id,
        country_id,
        learning_type,
        SUM(CASE WHEN result = 'succeeded' THEN 1 ELSE 0 END) AS succeeded,
        SUM(CASE WHEN result = 'medium' THEN 1 ELSE 0 END) AS medium,
        SUM(CASE WHEN result = 'failed' THEN 1 ELSE 0 END) AS failed
    FROM QuestionResult
    GROUP BY user_id, country_id, learning_type;`);
}

async function main() {
    // Truncate Continent
    await truncate(
        'Region',
        'Continent',
        'Country',
        'Currency',
        'CountryCurrency'
    );
    const continents: Record<string, number> = {};
    const regions: Record<string, number> = {};
    const countries: Record<string, number> = {};

    for (const continent of CONTINENTS) {
        const insertedContinent = await prisma.continent.create({
            data: { name: continent.name }
        });
        continents[continent.name.en] = insertedContinent.id;

        for (const region of continent.regions) {
            const insertedRegion = await prisma.region.create({
                data: {
                    name: region,
                    continent_id: insertedContinent.id
                }
            });

            regions[region.en] = insertedRegion.id;
        }
    }

    for (const currency of CURRENCIES) {
        await prisma.currency.create({
            data: {
                name: currency.name,
                symbol: currency.symbol
            }
        });
    }

    for (const country of COUNTRIES) {
        const regionId = regions[country.region];
        const insertedCountry = await prisma.country.create({
            data: {
                code: country.code,
                name: country.name,
                capital: country.capital,
                official_name: country.official_name,
                region_id: regionId,
                population: country.population,
                google_maps_link: country.google_maps_link,
                flag: country.flag
            },
            include: {
                region: true,
                countryCurrencies: true
            }
        });

        for (const currency of country.currencies) {
            const insertedCurrency = await prisma.currency.findFirst({
                where: { name: currency.name }
            });

            if (!insertedCurrency) {
                throw new Error(
                    `Currency with symbol ${currency.symbol} not found`
                );
            }

            await prisma.countryCurrency.create({
                data: {
                    country_id: insertedCountry.id,
                    currency_id: insertedCurrency.id
                }
            });
        }

        countries[country.code] = insertedCountry.id;
    }
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
