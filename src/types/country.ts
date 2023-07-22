export interface Country {
    name: JSON;
    official_name: JSON;
    capital: JSON;
    continent_id: number;
    population: number;
    google_maps_link: string;
    flag: string;
    alpha3Code: string;
    currencies: Currency[];
}

export interface CountryDetails {
    name: string;
    alpha3Code: string;
    flag: string;
    score: number;
    region: Region;
}

export type Region =
    | 'Africa'
    | 'Americas'
    | 'Asia'
    | 'Europe'
    | 'Oceania'
    | 'World';

export interface Currency {
    name: string;
    symbol: string;
    id: number;
}
