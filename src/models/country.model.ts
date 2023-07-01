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

export const findAll = (callback: Function) => {
    const query =
        'SELECT * FROM countries JOIN currencies ON countries.alpha3Code = currencies.country_code ORDER BY countries.name';
    database.query(query, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = <RowDataPacket[]>result;
        const countries: Country[] = [];
        let currentCountry: Country;
        let lastCountryCode = '';
        rows.forEach((row) => {
            currentCountry = {
                name: row.name,
                official_name: row.official_name,
                capital: row.capital,
                region: row.region,
                subregion: row.subregion,
                population: row.population,
                google_maps_link: row.google_maps_link,
                flag: row.flag,
                alpha3Code: row.alpha3Code,
                currencies: []
            };

            if (row.country_code !== lastCountryCode) {
                const currency: Currency = {
                    country_code: row.country_code,
                    currency_name: row.currency_name,
                    symbol: row.symbol,
                    id: row.id
                };
                currentCountry.currencies.push(currency);
                countries.push(currentCountry);
            }

            if (row.country_code === lastCountryCode) {
                const currency: Currency = {
                    country_code: row.country_code,
                    currency_name: row.currency_name,
                    symbol: row.symbol,
                    id: row.id
                };
                countries[countries.length - 1].currencies.push(currency);
            }

            lastCountryCode = row.country_code;
        });
        callback(null, countries);
    });
};

export const findByCode = (code: string, lang: Lang, callback: Function) => {
    const query =
        'SELECT * FROM countries JOIN currencies ON countries.alpha3Code = currencies.country_code WHERE countries.alpha3Code = ?';

    database.query(query, [code], (err, result: RowDataPacket[]) => {
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
            rows.forEach((row) => {
                if (lang !== 'en') {
                    const { official_name, capital } = findTranslations(
                        row.country_code,
                        lang
                    );

                    if (official_name && capital) {
                        country.official_name = official_name;
                        country.capital = capital;
                    }
                }
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
): { official_name: string; capital: string } => {
    const query =
        'SELECT official_name, capital FROM translations WHERE country_code = ? AND language = ?';

    database.query(query, [code, lang], (err, result: RowDataPacket[]) => {
        if (err) {
            console.log(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length === 0) {
                return { official_name: '', capital: '' };
            }

            return {
                official_name: rows[0].official_name,
                capital: rows[0].capital
            };
        }
    });
    return { official_name: '', capital: '' };
};
