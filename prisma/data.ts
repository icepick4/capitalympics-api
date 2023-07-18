import { Lang } from '../src/utils/common';

type Translation = Record<Lang, string>;

type Continent = {
    name: Translation;
    regions: Translation[];
};

export const CONTINENTS: Continent[] = [
    {
        name: { en: 'America', es: 'América', fr: 'Amérique', it: 'America' },
        regions: [
            {
                en: 'North America',
                es: 'América del Norte',
                fr: 'Amérique du Nord',
                it: 'America del Nord'
            },
            {
                en: 'Central America',
                es: 'América Central',
                fr: 'Amérique centrale',
                it: 'America Centrale'
            },
            {
                en: 'South America',
                es: 'América del Sur',
                fr: 'Amérique du Sud',
                it: 'America del Sud'
            },
            { en: 'Caribbean', es: 'Caribe', fr: 'Caraïbes', it: 'Caraibi' }
        ]
    },
    {
        name: { en: 'Africa', es: 'África', fr: "L'Afrique", it: 'Africa' },
        regions: [
            {
                en: 'North Africa',
                es: 'Norte de África',
                fr: 'Afrique du Nord',
                it: 'Africa settentrionale'
            },
            {
                en: 'West Africa',
                es: 'África Occidental',
                fr: "Afrique de l'Ouest",
                it: 'Africa occidentale'
            },
            {
                en: 'Central Africa',
                es: 'África Central',
                fr: 'Afrique centrale',
                it: 'Africa centrale'
            },
            {
                en: 'East Africa',
                es: 'África Oriental',
                fr: "Afrique de l'Est",
                it: 'Africa orientale'
            },
            {
                en: 'Southern Africa',
                es: 'África Austral',
                fr: 'Afrique australe',
                it: 'Africa meridionale'
            }
        ]
    },
    {
        name: { en: 'Asia', es: 'Asia', fr: 'Asie', it: 'Asia' },
        regions: [
            {
                en: 'West Asia',
                es: 'Asia Occidental',
                fr: "Asie de l'Ouest",
                it: 'Asia occidentale'
            },
            {
                en: 'Central Asia',
                es: 'Asia Central',
                fr: 'Asie centrale',
                it: 'Asia centrale'
            },
            {
                en: 'Southern Asia',
                es: 'Asia Meridional',
                fr: 'Asie du Sud',
                it: 'Asia meridionale'
            },
            {
                en: 'East Asia',
                es: 'Asia Oriental',
                fr: "Asie de l'Est",
                it: 'Asia orientale'
            },
            {
                en: 'Southeast Asia',
                es: 'Sudeste Asiático',
                fr: 'Asie du Sud-Est',
                it: 'Asia sudorientale'
            }
        ]
    },
    {
        name: { en: 'Europe', es: 'Europa', fr: 'Europe', it: 'Europa' },
        regions: [
            {
                en: 'Western Europe',
                es: 'Europa Occidental',
                fr: "Europe de l'Ouest",
                it: 'Europa occidentale'
            },
            {
                en: 'Eastern Europe',
                es: 'Europa del Este',
                fr: "Europe de l'Est",
                it: 'Europa orientale'
            },
            {
                en: 'Northern Europe',
                es: 'Europa del Norte',
                fr: 'Europe du Nord',
                it: 'Europa del Nord'
            },
            {
                en: 'Southern Europe',
                es: 'Europa del Sur',
                fr: 'Europe du Sud',
                it: 'Europa meridionale'
            },
            {
                en: 'Central Europe',
                es: 'Europa Central',
                fr: 'Europe centrale',
                it: 'Europa centrale'
            }
        ]
    },
    {
        name: { en: 'Oceania', es: 'Oceanía', fr: 'Océanie', it: 'Oceania' },
        regions: [
            {
                en: 'Australasia',
                es: 'Australasia',
                fr: 'Australasie',
                it: 'Australasia'
            },
            {
                en: 'Melanesia',
                es: 'Melanesia',
                fr: 'Mélanésie',
                it: 'Melanesia'
            },
            {
                en: 'Micronesia',
                es: 'Micronesia',
                fr: 'Micronésie',
                it: 'Micronesia'
            },
            {
                en: 'Polynesia',
                es: 'Polinesia',
                fr: 'Polynésie',
                it: 'Polinesia'
            }
        ]
    }
];

type Currency = {
    name: string;
    symbol: string;
};

export const CURRENCIES: Currency[] = [
    {
        name: 'Afghan afghani',
        symbol: '؋'
    },
    {
        name: 'South African rand',
        symbol: 'R'
    },
    {
        name: 'Euro',
        symbol: '€'
    }
];

type Country = {
    code: string;
    name: Translation;
    capital: Translation;
    official_name: Translation;
    region: string;
    population: number;
    google_maps_link: string;
    flag: string;
    currencies: Currency[];
};

export const COUNTRIES: Country[] = [
    {
        code: 'AFG',
        name: {
            en: 'Afghanistan',
            es: 'Afganistán',
            fr: 'Afghanistan',
            it: 'Afghanistan'
        },
        capital: {
            fr: 'Kaboul',
            en: 'Kabul',
            es: '',
            it: ''
        },
        official_name: {
            fr: "République islamique d'Afghanistan",
            en: 'Afghanistan',
            es: '',
            it: ''
        },
        region: 'Southern Asia',
        population: 38928346,
        google_maps_link: 'https://goo.gl/maps/1Z2Z2Z2Z2Z2Z2Z2Z2',
        flag: 'https://restcountries.eu/data/afg.svg',
        currencies: [
            {
                name: 'Afghan afghani',
                symbol: '؋'
            }
        ]
    },
    {
        code: 'ZAF',
        name: {
            en: 'Albania',
            es: 'Albania',
            fr: 'Afrique du Sud',
            it: 'Albania'
        },
        capital: {
            fr: 'Pretoria',
            en: '',
            es: '',
            it: ''
        },
        official_name: {
            fr: "République d'Afrique du Sud",
            en: '',
            es: '',
            it: ''
        },
        region: 'Southern Africa',
        population: 59308690,
        google_maps_link: 'https://goo.gl/maps/3Z4Q2Z2Z2Z2Z2Z2Z2',
        flag: 'https://restcountries.eu/data/zaf.svg',
        currencies: [
            {
                name: 'South African rand',
                symbol: 'R'
            }
        ]
    },
    {
        code: 'ALB',
        name: {
            en: 'Albania',
            es: 'Albania',
            fr: 'Albanie',
            it: 'Albania'
        },
        capital: {
            fr: 'Tirana',
            en: '',
            es: '',
            it: ''
        },
        official_name: {
            fr: "République d'Albanie",
            en: '',
            es: '',
            it: ''
        },
        region: 'Southern Europe',
        population: 2877797,
        google_maps_link: 'https://goo.gl/maps/4Z5Q2Z2Z2Z2Z2Z2Z2',
        flag: 'https://restcountries.eu/data/alb.svg',
        currencies: [
            {
                name: 'Euro',
                symbol: '€'
            }
        ]
    }
];

// type Country = {
//     code: string
//     name: Translation
//     capital: Translation
//     official_name: Translation
//     region: string
//     population: number
// };

// export const COUNTRIES: Country[] = [
//     {code: "AFG", name: {en: "Afghanistan", es: "Afganistán", fr: "Afghanistan", it: "Afghanistan"}, capital: {fr: "Kaboul"}},
//     {code: "ZAF", name: {en: "Albania", es: "Albania", fr: "Afrique du Sud", it: "Albania"}, capital: {fr: "Pretoria"}},
//     {code: "ALB", name: {en: "Albania", es: "Albania", fr: "Albanie", it: "Albania"}, capital: {fr: "Tirana"}},
//     {code: "DZA", name: {en: "Algeria", es: "Argelia", fr: "Algérie", it: "Algeria"}, capital: {fr: "Alger"}},
//     {code: "DEU", name: {en: "Germany", es: "Alemania", fr: "Allemagne", it: "Germania"}, capital: {fr: "Berlin"}},
//     {code: "AND", name: {en: "Andorra", es: "Andorra", fr: "Andorre", it: "Andorra"}, capital: {fr: "Andorre-la-Vieille"}},
//     {code: "AGO", name: {en: "Angola", es: "Angola", fr: "Angola", it: "Angola"}, capital: {fr: "Luanda"}},
//     {code: "ATG", name: {en: "Antigua and Barbuda", es: "Antigua y Barbuda", fr: "Antigua-et-Barbuda", it: "Antigua e Barbuda"}, capital: {fr: "Saint John's"}},
//     {code: "SAU", name: {en: "Saudi Arabia", es: "Arabia Saudí", fr: "Arabie Saoudite", it: "Arabia Saudita"}, capital: {fr: "Riyad"}},
//     {code: "ARG", name: {en: "Argentina", es: "Argentina", fr: "Argentine", it: "Argentina"}, capital: {fr: "Buenos Aires"}},
//     {code: "ARM", name: {en: "Armenia", es: "Armenia", fr: "Arménie", it: "Armenia"}, capital: {fr: "Erevan"}},
//     {code: "AUS", name: {en: "Australia", es: "Australia", fr: "Australie", it: "Australia"}, capital: {fr: "Canberra"}},
//     {code: "AUT", name: {en: "Austria", es: "Austria", fr: "Autriche", it: "Austria"}, capital: {fr: "Vienne"}},
//     {code: "AZE", name: {en: "Azerbaijan", es: "Azerbaiyán", fr: "Azerbaïdjan", it: "Azerbaigian"}, capital: {fr: "Bakou"}},
//     {code: "BHS", name: {en: "Bahamas", es: "Bahamas", fr: "Bahamas", it: "Bahamas"}, capital: {fr: "Nassau"}},
//     {code: "BHR", name: {en: "Bahrain", es: "Bahréin", fr: "Bahreïn", it: "Bahrein"}, capital: {fr: "Manama"}},
//     {code: "BGD", name: {en: "Bangladesh", es: "Bangladesh", fr: "Bangladesh", it: "Bangladesh"}, capital: {fr: "Dacca"}},
//     {code: "BRB", name: {en: "Barbados", es: "Barbados", fr: "Barbade", it: "Barbados"}, capital: {fr: "Bridgetown"}},
//     {code: "BEL", name: {en: "Belgium", es: "Bélgica", fr: "Belgique", it: "Belgio"}, capital: {fr: "Bruxelles"}},
//     {code: "BLZ", name: {en: "Belize", es: "Belice", fr: "Belize", it: "Belize"}, capital: {fr: "Belmopan"}},
//     {code: "BEN", name: {en: "Benin", es: "Benín", fr: "Bénin", it: "Benin"}, capital: {fr: "Porto-Novo"}},
//     {code: "BTN", name: {en: "Bhutan", es: "Bután", fr: "Bhoutan", it: "Bhutan"}, capital: {fr: "Thimbu"}},
//     {code: "BLR", name: {en: "Belarus", es: "Bielorrusia", fr: "Biélorussie", it: "Bielorussia"}, capital: {fr: "Minsk"}},
//     {code: "MMR", name: {en: "Burma", es: "Birmania", fr: "Birmanie", it: "Birmania"}, capital: {fr: "Naypyidaw"}},
//     {code: "BOL", name: {en: "Bolivia", es: "Bolivia", fr: "Bolivie", it: "Bolivia"}, capital: {fr: "Sucre"}},
//     {code: "BIH", name: {en: "Bosnia and Herzegovina", es: "Bosnia y Hercegovina", fr: "Bosnie-Herzégovine", it: "Bosnia ed Erzegovina"}, capital: {fr: "Sarajevo"}},
//     {code: "BWA", name: {en: "Botswana", es: "Botsuana", fr: "Botswana", it: "Botswana"}, capital: {fr: "Gaborone"}},
//     {code: "BRA", name: {en: "Brazil", es: "Brasil", fr: "Brésil", it: "Brasile"}, capital: {fr: "Brasilia"}},
//     {code: "BRN", name: {en: "Brunei", es: "Brunei", fr: "Brunei", it: "Brunei"}, capital: {fr: "Bandar Seri Begawan"}},
//     {code: "BGR", name: {en: "Bulgaria", es: "Bulgaria", fr: "Bulgarie", it: "Bulgaria"}, capital: {fr: "Sofia"}},
//     {code: "BFA", name: {en: "Burkina Faso", es: "Burkina Faso", fr: "Burkina Faso", it: "Burkina Faso"}, capital: {fr: "Ouagadougou"}},
//     {code: "BDI", name: {en: "Burundi", es: "Burundi", fr: "Burundi", it: "Burundi"}, capital: {fr: "Bujumbura"}},
//     {code: "KHM", name: {en: "Cambodia", es: "Camboya", fr: "Cambodge", it: "Cambogia"}, capital: {fr: "Phnom Penh"}},
//     {code: "CMR", name: {en: "Cameroon", es: "Camerún", fr: "Cameroun", it: "Camerun"}, capital: {fr: "Yaoundé"}},
//     {code: "CAN", name: {en: "Canada", es: "Canadá", fr: "Canada", it: "Canada"}, capital: {fr: "Ottawa"}},
//     {code: "CPV", name: {en: "Cape Verde", es: "Cabo Verde", fr: "Cap-Vert", it: "Capo Verde"}, capital: {fr: "Praia"}},
//     {code: "CHL", name: {en: "Chile", es: "Chile", fr: "Chili", it: "Cile"}, capital: {fr: "Santiago"}},
//     {code: "CHN", name: {en: "China", es: "China", fr: "Chine", it: "Cina"}, capital: {fr: "Pékin"}},
//     {code: "CYP", name: {en: "Cyprus", es: "Chipre", fr: "Chypre", it: "Cipro"}, capital: {fr: "Nicosie"}},
//     {code: "COL", name: {en: "Colombia", es: "Colombia", fr: "Colombie", it: "Colombia"}, capital: {fr: "Bogota"}},
//     {code: "COM", name: {en: "Comoros", es: "Comoras", fr: "Comores", it: "Comore"}, capital: {fr: "Moroni"}},
//     {code: "COG", name: {en: "Congo", es: "Congo", fr: "Congo", it: "Congo"}, capital: {fr: "Brazzaville"}},
//     {code: "PRK", name: {en: "Congo, The Democratic Republic of the", es: "Congo, República Democrática del", fr: "Corée du Nord", it: "Congo, Repubblica Democratica del"}, capital: {fr: "Pyongyang"}},
//     {code: "KOR", name: {en: "Congo, The Democratic Republic of the", es: "Congo, República Democrática del", fr: "Corée du Sud", it: "Congo, Repubblica Democratica del"}, capital: {fr: "Séoul"}},
//     {code: "CRI", name: {en: "Costa Rica", es: "Costa Rica", fr: "Costa Rica", it: "Costa Rica"}, capital: {fr: "San José"}},
//     {code: "CIV", name: {en: "Croatia", es: "Croacia", fr: "Côte d'Ivoire", it: "Croazia"}, capital: {fr: "Yamoussoukro"}},
//     {code: "HRV", name: {en: "Croatia", es: "Croacia", fr: "Croatie", it: "Croazia"}, capital: {fr: "Zagreb"}},
//     {code: "CUB", name: {en: "Cuba", es: "Cuba", fr: "Cuba", it: "Cuba"}, capital: {fr: "La Havane"}},
//     {code: "DNK", name: {en: "Denmark", es: "Dinamarca", fr: "Danemark", it: "Danimarca"}, capital: {fr: "Copenhague"}},
//     {code: "DJI", name: {en: "Djibouti", es: "Yibuti", fr: "Djibouti", it: "Gibuti"}, capital: {fr: "Djibouti"}},
//     {code: "DMA", name: {en: "Dominica", es: "Dominica", fr: "Dominique", it: "Dominica"}, capital: {fr: "Roseau"}},
//     {code: "EGY", name: {en: "Egypt", es: "Egipto", fr: "Egypte", it: "Egitto"}, capital: {fr: "Le Caire"}},
//     {code: "ARE", name: {en: "United Arab Emirates", es: "Emiratos Arabes Unidos", fr: "Emirats Arabes Unis", it: "Emirati Arabi Uniti"}, capital: {fr: "Abu Dhabi"}},
//     {code: "ECU", name: {en: "Ecuador", es: "Ecuador", fr: "Equateur", it: "Ecuador"}, capital: {fr: "Quito"}},
//     {code: "ERI", name: {en: "Eritrea", es: "Eritrea", fr: "Erythrée", it: "Eritrea"}, capital: {fr: "Asmara"}},
//     {code: "ESP", name: {en: "Spain", es: "España", fr: "Espagne", it: "Spagna"}, capital: {fr: "Madrid"}},
//     {code: "EST", name: {en: "Estonia", es: "Estonia", fr: "Estonie", it: "Estonia"}, capital: {fr: "Tallinn"}},
//     {code: "SWZ", name: {en: "Eswatini", es: "Eswatini", fr: "Eswatini", it: "Eswatini"}, capital: {fr: "Mbabane"}},
//     {code: "USA", name: {en: "United States", es: "Estados Unidos", fr: "Etats-Unis", it: "Stati Uniti d'America"}, capital: {fr: "Washington"}},
//     {code: "ETH", name: {en: "Ethiopia", es: "Etiopía", fr: "Ethiopie", it: "Etiopia"}, capital: {fr: "Addis-Abeba"}},
//     {code: "FJI", name: {en: "Fiji", es: "Fiyi", fr: "Fidji", it: "Figi"}, capital: {fr: "Suva"}},
//     {code: "FIN", name: {en: "Finland", es: "Finlandia", fr: "Finlande", it: "Finlandia"}, capital: {fr: "Helsinki"}},
//     {code: "FRA", name: {en: "France", es: "Francia", fr: "France", it: "Francia"}, capital: {fr: "Paris"}},
//     {code: "GAB", name: {en: "Gabon", es: "Gabón", fr: "Gabon", it: "Gabon"}, capital: {fr: "Libreville"}},
//     {code: "GMB", name: {en: "Gambia", es: "Gambia", fr: "Gambie", it: "Gambia"}, capital: {fr: "Banjul"}},
//     {code: "GEO", name: {en: "Georgia", es: "Georgia", fr: "Géorgie", it: "Georgia"}, capital: {fr: "Tbilissi"}},
//     {code: "GHA", name: {en: "Ghana", es: "Ghana", fr: "Ghana", it: "Ghana"}, capital: {fr: "Accra"}},
//     {code: "GRC", name: {en: "Greece", es: "Grecia", fr: "Grèce", it: "Grecia"}, capital: {fr: "Athènes"}},
//     {code: "GRD", name: {en: "Grenada", es: "Granada", fr: "Grenade", it: "Grenada"}, capital: {fr: "Saint George's"}},
//     {code: "GTM", name: {en: "Guatemala", es: "Guatemala", fr: "Guatemala", it: "Guatemala"}, capital: {fr: "Guatemala"}},
//     {code: "GIN", name: {en: "Guinea", es: "Guinea", fr: "Guinée", it: "Guinea"}, capital: {fr: "Conakry"}},
//     {code: "GNQ", name: {en: "Guinea-Bissau", es: "Guinea-Bissau", fr: "Guinée équatoriale", it: "Guinea-Bissau"}, capital: {fr: "Malabo"}},
//     {code: "GNB", name: {en: "Guinea-Bissau", es: "Guinea-Bissau", fr: "Guinée-Bissau", it: "Guinea-Bissau"}, capital: {fr: "Bissau"}},
//     {code: "GUY", name: {en: "Guyana", es: "Guyana", fr: "Guyana", it: "Guyana"}, capital: {fr: "Georgetown"}},
//     {code: "HTI", name: {en: "Haiti", es: "Haití", fr: "Haïti", it: "Haiti"}, capital: {fr: "Port-au-Prince"}},
//     {code: "HND", name: {en: "Honduras", es: "Honduras", fr: "Honduras", it: "Honduras"}, capital: {fr: "Tegucigalpa"}},
//     {code: "HUN", name: {en: "Hungary", es: "Hungría", fr: "Hongrie", it: "Ungheria"}, capital: {fr: "Budapest"}},
//     {code: "MUS", name: {en: "Mauritius", es: "Mauricio", fr: "Île Maurice", it: "Mauritius"}, capital: {fr: "Port Louis"}},
//     {code: "IND", name: {en: "India", es: "India", fr: "Inde", it: "India"}, capital: {fr: "New Delhi"}},
//     {code: "IDN", name: {en: "Indonesia", es: "Indonesia", fr: "Indonésie", it: "Indonesia"}, capital: {fr: "Jakarta"}},
//     {code: "IRQ", name: {en: "Iraq", es: "Iraq", fr: "Irak", it: "Iraq"}, capital: {fr: "Bagdad"}},
//     {code: "IRN", name: {en: "Iran", es: "Irán", fr: "Iran", it: "Iran"}, capital: {fr: "Téhéran"}},
//     {code: "IRL", name: {en: "Ireland", es: "Irlanda", fr: "Irlande", it: "Irlanda"}, capital: {fr: "Dublin"}},
//     {code: "ISL", name: {en: "Iceland", es: "Islandia", fr: "Islande", it: "Islanda"}, capital: {fr: "Reykjavik"}},
//     {code: "ISR", name: {en: "Israel", es: "Israel", fr: "Israël", it: "Israele"}, capital: {fr: "Jérusalem"}},
//     {code: "ITA", name: {en: "Italy", es: "Italia", fr: "Italie", it: "Italia"}, capital: {fr: "Rome"}},
//     {code: "JAM", name: {en: "Jamaica", es: "Jamaica", fr: "Jamaïque", it: "Giamaica"}, capital: {fr: "Kingston"}},
//     {code: "JPN", name: {en: "Japan", es: "Japón", fr: "Japon", it: "Giappone"}, capital: {fr: "Tokyo"}},
//     {code: "JOR", name: {en: "Jordan", es: "Jordania", fr: "Jordanie", it: "Giordania"}, capital: {fr: "Amman"}},
//     {code: "KAZ", name: {en: "Kazakhstan", es: "Kazajstán", fr: "Kazakhstan", it: "Kazakistan"}, capital: {fr: "Astana"}},
//     {code: "KEN", name: {en: "Kenya", es: "Kenia", fr: "Kenya", it: "Kenya"}, capital: {fr: "Nairobi"}},
//     {code: "KGZ", name: {en: "Kyrgyzstan", es: "Kirguistán", fr: "Kirghizistan", it: "Kirghizistan"}, capital: {fr: "Bichkek"}},
//     {code: "KIR", name: {en: "Kiribati", es: "Kiribati", fr: "Kiribati", it: "Kiribati"}, capital: {fr: "Tarawa"}},
//     {code: "XKX", name: {en: "Kosovo", es: "Kosovo", fr: "Kosovo", it: "Kosovo"}, capital: {fr: "Pristina"}},
//     {code: "KWT", name: {en: "Kuwait", es: "Kuwait", fr: "Koweït", it: "Kuwait"}, capital: {fr: "Koweït"}},
//     {code: "LAO", name: {en: "Laos", es: "Laos", fr: "Laos", it: "Laos"}, capital: {fr: "Vientiane"}},
//     {code: "LSO", name: {en: "Lesotho", es: "Lesotho", fr: "Lesotho", it: "Lesotho"}, capital: {fr: "Maseru"}},
//     {code: "LVA", name: {en: "Latvia", es: "Letonia", fr: "Lettonie", it: "Lettonia"}, capital: {fr: "Riga"}},
//     {code: "LBN", name: {en: "Lebanon", es: "Líbano", fr: "Liban", it: "Libano"}, capital: {fr: "Beyrouth"}},
//     {code: "LBR", name: {en: "Liberia", es: "Liberia", fr: "Liberia", it: "Liberia"}, capital: {fr: "Monrovia"}},
//     {code: "LBY", name: {en: "Libya", es: "Libia", fr: "Libye", it: "Libia"}, capital: {fr: "Tripoli"}},
//     {code: "LIE", name: {en: "Liechtenstein", es: "Liechtenstein", fr: "Liechtenstein", it: "Liechtenstein"}, capital: {fr: "Vaduz"}},
//     {code: "LTU", name: {en: "Lithuania", es: "Lituania", fr: "Lituanie", it: "Lituania"}, capital: {fr: "Vilnius"}},
//     {code: "LUX", name: {en: "Luxembourg", es: "Luxemburgo", fr: "Luxembourg", it: "Lussemburgo"}, capital: {fr: "Luxembourg"}},
//     {code: "MKD", name: {en: "Northern Macedonia", es: "Macedonia del Norte", fr: "Macédoine du Nord", it: "Macedonia settentrionale"}, capital: {fr: "Skopje"}},
//     {code: "MDG", name: {en: "Madagascar", es: "Madagascar", fr: "Madagascar", it: "Madagascar"}, capital: {fr: "Antananarivo"}},
//     {code: "MYS", name: {en: "Malaysia", es: "Malasia", fr: "Malaisie", it: "Malesia"}, capital: {fr: "Kuala Lumpur"}},
//     {code: "MWI", name: {en: "Malawi", es: "Malawi", fr: "Malawi", it: "Malawi"}, capital: {fr: "Lilongwe"}},
//     {code: "MDV", name: {en: "Maldives", es: "Maldivas", fr: "Maldives", it: "Maldive"}, capital: {fr: "Malé"}},
//     {code: "MLI", name: {en: "Mali", es: "Malí", fr: "Mali", it: "Mali"}, capital: {fr: "Bamako"}},
//     {code: "MLT", name: {en: "Malta", es: "Malta", fr: "Malte", it: "Malta"}, capital: {fr: "La Valette"}},
//     {code: "MAR", name: {en: "Morocco", es: "Marruecos", fr: "Maroc", it: "Marocco"}, capital: {fr: "Rabat"}},
//     {code: "MHL", name: {en: "Marshall Islands", es: "Marruecos", fr: "Marshall", it: "Isole Marshall"}, capital: {fr: "Majuro"}},
//     {code: "MRT", name: {en: "Mauritania", es: "Mauritania", fr: "Mauritanie", it: "Mauritania"}, capital: {fr: "Nouakchott"}},
//     {code: "MEX", name: {en: "Mexico", es: "México", fr: "Mexique", it: "Messico"}, capital: {fr: "Mexico"}},
//     {code: "FSM", name: {en: "Micronesia", es: "Micronesia", fr: "Micronésie", it: "Micronesia"}, capital: {fr: "Palikir"}},
//     {code: "MDA", name: {en: "Moldova", es: "Moldavia", fr: "Moldavie", it: "Moldova"}, capital: {fr: "Chisinau"}},
//     {code: "MCO", name: {en: "Monaco", es: "Mónaco", fr: "Monaco", it: "Monaco"}, capital: {fr: "Monaco"}},
//     {code: "MNG", name: {en: "Mongolia", es: "Mongolia", fr: "Mongolie", it: "Mongolia"}, capital: {fr: "Oulan-Bator"}},
//     {code: "MNE", name: {en: "Montenegro", es: "Montenegro", fr: "Monténégro", it: "Montenegro"}, capital: {fr: "Podgorica"}},
//     {code: "MOZ", name: {en: "Mozambique", es: "Mozambique", fr: "Mozambique", it: "Mozambico"}, capital: {fr: "Maputo"}},
//     {code: "NAM", name: {en: "Namibia", es: "Namibia", fr: "Namibie", it: "Namibia"}, capital: {fr: "Windhoek"}},
//     {code: "NRU", name: {en: "Nauru", es: "Nauru", fr: "Nauru", it: "Nauru"}, capital: {fr: "Yaren"}},
//     {code: "NPL", name: {en: "Nepal", es: "Nepal", fr: "Népal", it: "Nepal"}, capital: {fr: "Katmandou"}},
//     {code: "NIC", name: {en: "Nicaragua", es: "Nicaragua", fr: "Nicaragua", it: "Nicaragua"}, capital: {fr: "Managua"}},
//     {code: "NER", name: {en: "Niger", es: "Níger", fr: "Niger", it: "Niger"}, capital: {fr: "Niamey"}},
//     {code: "NGA", name: {en: "Nigeria", es: "Nigeria", fr: "Nigeria", it: "Nigeria"}, capital: {fr: "Abuja"}},
//     {code: "NOR", name: {en: "Norway", es: "Noruega", fr: "Norvège", it: "Norvegia"}, capital: {fr: "Oslo"}},
//     {code: "NZL", name: {en: "New Zealand", es: "Nueva Zelanda", fr: "Nouvelle-Zélande", it: "Nuova Zelanda"}, capital: {fr: "Wellington"}},
//     {code: "OMN", name: {en: "Oman", es: "Omán", fr: "Oman", it: "Oman"}, capital: {fr: "Mascate"}},
//     {code: "UGA", name: {en: "Uganda", es: "Uganda", fr: "Ouganda", it: "Uganda"}, capital: {fr: "Kampala"}},
//     {code: "UZB", name: {en: "Uzbekistan", es: "Uzbekistán", fr: "Ouzbékistan", it: "Uzbekistan"}, capital: {fr: "Tachkent"}},
//     {code: "PAK", name: {en: "Pakistan", es: "Pakistán", fr: "Pakistan", it: "Pakistan"}, capital: {fr: "Islamabad"}},
//     {code: "PLW", name: {en: "Palau", es: "Palau", fr: "Palaos", it: "Palau"}, capital: {fr: "Melekeok"}},
//     {code: "PSE", name: {en: "Palestine", es: "Palestina", fr: "Palestine", it: "Palestina"}, capital: {fr: "Jérusalem-Est"}},
//     {code: "PAN", name: {en: "Panama", es: "Panamá", fr: "Panama", it: "Panama"}, capital: {fr: "Panama"}},
//     {code: "PNG", name: {en: "Papua New Guinea", es: "Papúa Nueva Guinea", fr: "Papouasie-Nouvelle-Guinée", it: "Papua Nuova Guinea"}, capital: {fr: "Port Moresby"}},
//     {code: "PRY", name: {en: "Paraguay", es: "Paraguay", fr: "Paraguay", it: "Paraguay"}, capital: {fr: "Asunción"}},
//     {code: "NLD", name: {en: "Netherlands", es: "Países Bajos", fr: "Pays-Bas", it: "Paesi Bassi"}, capital: {fr: "Amsterdam"}},
//     {code: "PER", name: {en: "Peru", es: "Perú", fr: "Pérou", it: "Perù"}, capital: {fr: "Lima"}},
//     {code: "PHL", name: {en: "Philippines", es: "Filipinas", fr: "Philippines", it: "Filippine"}, capital: {fr: "Manille"}},
//     {code: "POL", name: {en: "Poland", es: "Polonia", fr: "Pologne", it: "Polonia"}, capital: {fr: "Varsovie"}},
//     {code: "PRT", name: {en: "Portugal", es: "Portugal", fr: "Portugal", it: "Portogallo"}, capital: {fr: "Lisbonne"}},
//     {code: "QAT", name: {en: "Qatar", es: "Qatar", fr: "Qatar", it: "Qatar"}, capital: {fr: "Doha"}},
//     {code: "CAF", name: {en: "Central African Republic", es: "República Centroafricana", fr: "République Centrafricaine", it: "Repubblica Centrafricana"}, capital: {fr: "Bangui"}},
//     {code: "COD", name: {en: "Democratic Republic of Congo", es: "República Democrática del Congo", fr: "République Démocratique du Congo", it: "Repubblica Democratica del Congo"}, capital: {fr: "Kinshasa"}},
//     {code: "DOM", name: {en: "Dominican Republic", es: "República Dominicana", fr: "République Dominicaine", it: "Repubblica Dominicana"}, capital: {fr: "Saint-Domingue"}},
//     {code: "CZE", name: {en: "Republic of Korea", es: "República de Corea", fr: "République Tchèque", it: "Repubblica di Corea"}, capital: {fr: "Prague"}},
//     {code: "ROU", name: {en: "Romania", es: "Rumanía", fr: "Roumanie", it: "Romania"}, capital: {fr: "Bucarest"}},
//     {code: "GBR", name: {en: "United Kingdom", es: "Reino Unido", fr: "Royaume-Uni", it: "Regno Unito"}, capital: {fr: "Londres"}},
//     {code: "RUS", name: {en: "Russia", es: "Rusia", fr: "Russie", it: "Russia"}, capital: {fr: "Moscou"}},
//     {code: "RWA", name: {en: "Rwanda", es: "Ruanda", fr: "Rwanda", it: "Ruanda"}, capital: {fr: "Kigali"}},
//     {code: "KNA", name: {en: "Saint Kitts and Nevis", es: "San Cristóbal y Nieves", fr: "Saint-Kitts-et-Nevis", it: "Saint Kitts e Nevis"}, capital: {fr: "Basseterre"}},
//     {code: "SMR", name: {en: "San Marino", es: "San Marino", fr: "Saint-Marin", it: "San Marino"}, capital: {fr: "Saint-Marin"}},
//     {code: "VCT", name: {en: "Saint Vincent and the Grenadines", es: "San Vicente y las Granadinas", fr: "Saint-Vincent-et-les-Grenadines", it: "San Vincenzo e Grenadine"}, capital: {fr: "Kingstown"}},
//     {code: "LCA", name: {en: "Saint Lucia", es: "Santa Lucía", fr: "Sainte-Lucie", it: "Santa Lucia"}, capital: {fr: "Castries"}},
//     {code: "SLB", name: {en: "Solomon Islands", es: "Islas Salomón", fr: "Salomon", it: "Isole Salomone"}, capital: {fr: "Honiara"}},
//     {code: "SLV", name: {en: "Salvador", es: "Salvador", fr: "Salvador", it: "Salvador"}, capital: {fr: "San Salvador"}},
//     {code: "WSM", name: {en: "Samoa", es: "Samoa", fr: "Samoa", it: "Samoa"}, capital: {fr: "Apia"}},
//     {code: "STP", name: {en: "São Tomé and Príncipe", es: "Santo Tomé y Príncipe", fr: "São Tomé et Príncipe", it: "São Tomé e Príncipe"}, capital: {fr: "São Tomé"}},
//     {code: "SEN", name: {en: "Senegal", es: "Senegal", fr: "Sénégal", it: "Senegal"}, capital: {fr: "Dakar"}},
//     {code: "SRB", name: {en: "Serbia", es: "Serbia", fr: "Serbie", it: "Serbia"}, capital: {fr: "Belgrade"}},
//     {code: "SYC", name: {en: "Seychelles", es: "Seychelles", fr: "Seychelles", it: "Seychelles"}, capital: {fr: "Victoria"}},
//     {code: "SLE", name: {en: "Sierra Leone", es: "Sierra Leona", fr: "Sierra Leone", it: "Sierra Leone"}, capital: {fr: "Freetown"}},
//     {code: "SGP", name: {en: "Singapore", es: "Singapur", fr: "Singapour", it: "Singapore"}, capital: {fr: "Singapour"}},
//     {code: "SVK", name: {en: "Slovakia", es: "Eslovaquia", fr: "Slovaquie", it: "Slovacchia"}, capital: {fr: "Bratislava"}},
//     {code: "SVN", name: {en: "Slovenia", es: "Eslovenia", fr: "Slovénie", it: "Slovenia"}, capital: {fr: "Ljubljana"}},
//     {code: "SOM", name: {en: "Somalia", es: "Somalia", fr: "Somalie", it: "Somalia"}, capital: {fr: "Mogadiscio"}},
//     {code: "SDN", name: {en: "Sudan", es: "Sudán", fr: "Soudan", it: "Sudan"}, capital: {fr: "Khartoum"}},
//     {code: "SSD", name: {en: "South Sudan", es: "Sudán del Sur", fr: "Soudan du Sud", it: "Sud Sudan"}, capital: {fr: "Djouba"}},
//     {code: "LKA", name: {en: "Sri Lanka", es: "Sri Lanka", fr: "Sri Lanka", it: "Sri Lanka"}, capital: {fr: "Sri Jayawardenapura"}},
//     {code: "SWE", name: {en: "Sweden", es: "Suecia", fr: "Suède", it: "Svezia"}, capital: {fr: "Stockholm"}},
//     {code: "CHE", name: {en: "Switzerland", es: "Suiza", fr: "Suisse", it: "Svizzera"}, capital: {fr: "Berne"}},
//     {code: "SUR", name: {en: "Suriname", es: "Surinam", fr: "Suriname", it: "Suriname"}, capital: {fr: "Paramaribo"}},
//     {code: "SYR", name: {en: "Syria", es: "Siria", fr: "Syrie", it: "Siria"}, capital: {fr: "Damas"}},
//     {code: "TJK", name: {en: "Tajikistan", es: "Tayikistán", fr: "Tadjikistan", it: "Tagikistan"}, capital: {fr: "Douchanbe"}},
//     {code: "TWN", name: {en: "Taiwan", es: "Taiwán", fr: "Taïwan", it: "Taiwan"}, capital: {fr: "Taipei"}},
//     {code: "TZA", name: {en: "Tanzania", es: "Tanzania", fr: "Tanzanie", it: "Tanzania"}, capital: {fr: "Dodoma"}},
//     {code: "TCD", name: {en: "Chad", es: "Chad", fr: "Tchad", it: "Ciad"}, capital: {fr: "N'Djamena"}},
//     {code: "THA", name: {en: "Thailand", es: "Tailandia", fr: "Thaïlande", it: "Tailandia"}, capital: {fr: "Bangkok"}},
//     {code: "TLS", name: {en: "Timor-Leste", es: "Timor Oriental", fr: "Timor-Oriental", it: "Timor Est"}, capital: {fr: "Dili"}},
//     {code: "TGO", name: {en: "Togo", es: "Togo", fr: "Togo", it: "Togo"}, capital: {fr: "Lomé"}},
//     {code: "TON", name: {en: "Tonga", es: "Tonga", fr: "Tonga", it: "Tonga"}, capital: {fr: "Nukualofa"}},
//     {code: "TTO", name: {en: "Trinidad and Tobago", es: "Trinidad y Tobago", fr: "Trinité-et-Tobago", it: "Trinidad e Tobago"}, capital: {fr: "Port of Spain"}},
//     {code: "TUN", name: {en: "Tunisia", es: "Túnez", fr: "Tunisie", it: "Tunisia"}, capital: {fr: "Tunis"}},
//     {code: "TKM", name: {en: "Turkmenistan", es: "Turkmenistán", fr: "Turkménistan", it: "Turkmenistan"}, capital: {fr: "Achgabat"}},
//     {code: "TUR", name: {en: "Turkey", es: "Turquía", fr: "Turquie", it: "Turchia"}, capital: {fr: "Ankara"}},
//     {code: "TUV", name: {en: "Tuvalu", es: "Tuvalu", fr: "Tuvalu", it: "Tuvalu"}, capital: {fr: "Fanafuti"}},
//     {code: "UKR", name: {en: "Ukraine", es: "Ucrania", fr: "Ukraine", it: "Ucraina"}, capital: {fr: "Kiev"}},
//     {code: "URY", name: {en: "Uruguay", es: "Uruguay", fr: "Uruguay", it: "Uruguay"}, capital: {fr: "Montevideo"}},
//     {code: "VUT", name: {en: "Vanuatu", es: "Vanuatu", fr: "Vanuatu", it: "Vanuatu"}, capital: {fr: "Port-Vila"}},
//     {code: "VAT", name: {en: "Vatican", es: "Ciudad del Vaticano", fr: "Vatican", it: "Città del Vaticano"}, capital: {fr: "Vatican"}},
//     {code: "VEN", name: {en: "Venezuela", es: "Venezuela", fr: "Venezuela", it: "Venezuela"}, capital: {fr: "Caracas"}},
//     {code: "VNM", name: {en: "Vietnam", es: "Vietnam", fr: "Viêt Nam", it: "Vietnam"}, capital: {fr: "Hanoi"}},
//     {code: "YEM", name: {en: "Yemen", es: "Yemen", fr: "Yémen", it: "Yemen"}, capital: {fr: "Sanaa"}},
//     {code: "ZMB", name: {en: "Zambia", es: "Zambia", fr: "Zambie", it: "Zambia"}, capital: {fr: "Lusaka"}},
//     {code: "ZWE", name: {en: "Zimbabwe", es: "Zimbabue", fr: "Zimbabwe", it: "Zimbabwe"}, capital: {fr: "Harare"}},
// ];
