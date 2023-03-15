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

export class Currency {
    country_code: string;
    currency_name: string;
    symbol: string;
    id: number;
    constructor(
        currency_name: string,
        symbol: string,
        id: number,
        country_code: string
    ) {
        this.country_code = country_code;
        this.currency_name = currency_name;
        this.symbol = symbol;
        this.id = id;
    }
}
