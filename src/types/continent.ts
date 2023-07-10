export interface Continent {
    id: number;
    name: JSON;
    regions: Region[];
}

export interface Region {
    id: number;
    name: JSON;
    continent_id: number;
}
