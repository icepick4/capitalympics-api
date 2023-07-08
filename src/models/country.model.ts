import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { Country, Currency } from '../types/country';
import { Lang, Languages } from '../utils/common';

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
    const defaultLanguage: Lang = 'en';
    const language: Lang = Languages.includes(lang as Lang)
        ? (lang as Lang)
        : defaultLanguage;
    const query =
        'SELECT countries.*, translations.*, currencies.symbol, currencies.name AS currency_name ' +
        'FROM countries ' +
        'JOIN currencies ON countries.alpha3Code = currencies.country_code ' +
        'LEFT JOIN translations ON countries.alpha3Code = translations.country_code AND translations.language = ? ' +
        'ORDER BY countries.name';

    database.query(query, [language], (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            const countries: Country[] = [];
            let currentCountry: Country | undefined;
            for (const country of rows) {
                if (
                    !currentCountry ||
                    country.alpha3Code !== currentCountry.alpha3Code
                ) {
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

                    countries.push(currentCountry);
                }

                const currency: Currency = {
                    country_code: country.country_code,
                    name: country.currency_name,
                    symbol: country.symbol,
                    id: country.id
                };
                if (!currentCountry.currencies.includes(currency)) {
                    currentCountry.currencies.push(currency);
                }
            }

            callback(null, countries);
        }
    });
};

export const findByCode = (code: string, lang: Lang, callback: Function) => {
    const defaultLanguage: Lang = 'en';
    const language: Lang = Languages.includes(lang as Lang)
        ? (lang as Lang)
        : defaultLanguage;
    const query =
        'SELECT countries.*, translations.*, currencies.* ' +
        'FROM countries ' +
        'JOIN currencies ON countries.alpha3Code = currencies.country_code ' +
        'LEFT JOIN translations ON countries.alpha3Code = translations.country_code AND translations.language = ? ' +
        'WHERE countries.alpha3Code = ?';

    database.query(query, [language, code], (err, result: RowDataPacket[]) => {
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
                const currency: Currency = {
                    country_code: row.country_code,
                    name: row.name,
                    symbol: row.symbol,
                    id: row.id
                };
                country.currencies.push(currency);
            });
            callback(null, country);
        }
    });
};
