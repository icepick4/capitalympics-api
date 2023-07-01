import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { Country, Currency } from '../types/country';
import { Lang } from '../utils/common';

export const create = (country: Country, callback: Function) => {
    const query =
        'INSERT INTO countries (name, official_name, capital, region, subregion, population, google_maps_link, flag, alpha3Code, currencies) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    database.query(
        query,
        [
            country.name,
            country.official_name,
            country.capital,
            country.region,
            country.subregion,
            country.population,
            country.google_maps_link,
            country.flag,
            country.alpha3Code,
            country.currencies
        ],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            }
            const id = result.insertId;
            callback(null, id);
        }
    );
};

export const findAll = (lang: Lang, callback: Function) => {
    const query =
        'SELECT * FROM countries JOIN currencies ON countries.alpha3Code = currencies.country_code ORDER BY countries.name';
    const countries: Country[] = [];

    database.query(query, async (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            let currentCountry: Country;
            let lastCountryCode = '';

            for (const country of rows) {
                currentCountry = {
                    name: country.name,
                    official_name: country.official_name,
                    capital: country.capital,
                    region: country.region,
                    subregion: country.subregion,
                    population: country.population,
                    google_maps_link: country.google_maps_link,
                    flag: country.flag,
                    alpha3Code: country.alpha3Code,
                    currencies: []
                };

                if (country.country_code !== lastCountryCode) {
                    const currency: Currency = {
                        country_code: country.country_code,
                        currency_name: country.currency_name,
                        symbol: country.symbol,
                        id: country.id
                    };
                    currentCountry.currencies.push(currency);

                    if (lang !== 'en') {
                        try {
                            const { name, official_name, capital } =
                                await findTranslations(
                                    country.alpha3Code,
                                    lang
                                );
                            if (name && capital && official_name) {
                                currentCountry.name = name;
                                currentCountry.official_name = official_name;
                                currentCountry.capital = capital;
                            }
                        } catch (err) {
                            callback(err);
                            return;
                        }
                    }

                    countries.push(currentCountry);
                }

                if (country.country_code === lastCountryCode) {
                    const currency: Currency = {
                        country_code: country.country_code,
                        currency_name: country.currency_name,
                        symbol: country.symbol,
                        id: country.id
                    };
                    countries[countries.length - 1].currencies.push(currency);
                }

                lastCountryCode = country.country_code;
            }

            callback(null, countries);
        }
    });
};
export const findByCode = (code: string, lang: Lang, callback: Function) => {
    const query =
        'SELECT * FROM countries JOIN currencies ON countries.alpha3Code = currencies.country_code WHERE countries.alpha3Code = ?';

    database.query(query, [code], async (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length === 0) {
                callback(null, { error: 'Country not found' });
                return;
            }
            const country: Country = {
                name: rows[0].name,
                official_name: rows[0].official_name,
                capital: rows[0].capital,
                region: rows[0].region,
                subregion: rows[0].subregion,
                population: rows[0].population,
                google_maps_link: rows[0].google_maps_link,
                flag: rows[0].flag,
                alpha3Code: rows[0].alpha3Code,
                currencies: []
            };
            if (lang !== 'en') {
                const { name, official_name, capital } = await findTranslations(
                    country.alpha3Code,
                    lang
                );
                if (name && capital && official_name) {
                    country.name = name;
                    country.official_name = official_name;
                    country.capital = capital;
                }
            }
            rows.forEach((row) => {
                const currency: Currency = {
                    country_code: row.country_code,
                    currency_name: row.currency_name,
                    symbol: row.symbol,
                    id: row.id
                };
                country.currencies.push(currency);
            });
            callback(null, country);
        }
    });
};

export const findTranslations = (
    code: string,
    lang: Lang
): Promise<{ name: string; official_name: string; capital: string }> => {
    const query =
        'SELECT name, official_name, capital FROM translations WHERE country_code = ? AND language = ?';
    return new Promise((resolve, reject) => {
        database.query(query, [code, lang], (err, result: RowDataPacket[]) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                const rows = <RowDataPacket[]>result;
                if (rows.length === 0) {
                    resolve({ name: '', official_name: '', capital: '' });
                } else {
                    resolve({
                        name: rows[0].name,
                        official_name: rows[0].official_name,
                        capital: rows[0].capital
                    });
                }
            }
        });
    });
};
