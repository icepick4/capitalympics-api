export interface Country {
    name: string;
    official_name: string;
    capital: string;
    region: string;
    subregion: string;
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
    country_code: string;
    name: string;
    symbol: string;
    id: number;
}
