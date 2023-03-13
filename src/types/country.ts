export interface Country {
    id: number;
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
    name: string;
    symbol: string;
    constructor(name: string, symbol: string) {
        this.name = name;
        this.symbol = symbol;
    }
}
