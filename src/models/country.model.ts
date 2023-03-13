import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { Country } from '../types/country';

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
    const query = 'SELECT * FROM countries';

    database.query(query, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = <RowDataPacket[]>result;
        const countries: Country[] = [];

        rows.forEach((row) => {
            const country: Country = {
                id: row.id,
                name: row.name,
                official_name: row.official_name,
                capital: row.capital,
                region: row.region,
                subregion: row.subregion,
                population: row.population,
                google_maps_link: row.google_maps_link,
                flag: row.flag,
                alpha3Code: row.alpha3Code,
                currencies: row.currencies
            };
            countries.push(country);
        });
        callback(null, countries);
    });
};

export const findByCode = (code: string, callback: Function) => {
    const query = 'SELECT * FROM countries WHERE alpha3Code = ?';

    database.query(query, [code], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const country: Country = {
                id: result[0].id,
                name: result[0].name,
                official_name: result[0].official_name,
                capital: result[0].capital,
                region: result[0].region,
                subregion: result[0].subregion,
                population: result[0].population,
                google_maps_link: result[0].google_maps_link,
                flag: result[0].flag,
                alpha3Code: result[0].alpha3Code,
                currencies: result[0].currencies
            };
            callback(null, country);
        }
    });
};
