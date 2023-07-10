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

export interface Currency {
    name: string;
    symbol: string;
    id: number;
}
