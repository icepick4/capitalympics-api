import { PrismaClient } from '@prisma/client';
import { CONTINENTS, COUNTRIES, CURRENCIES } from './data';
const prisma = new PrismaClient();

async function truncate(...tables: string[]) {
    for (const table of tables) {
        await prisma.$queryRawUnsafe(`TRUNCATE TABLE ${table}`);
        await prisma.$queryRawUnsafe(
            `ALTER TABLE ${table} AUTO_INCREMENT = 1;`
        );
    }
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
            const insertedCurrency = await prisma.currency.findUnique({
                where: { symbol: currency.symbol }
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
