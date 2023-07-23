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
                en: 'Northern Africa',
                es: 'Norte de África',
                fr: 'Afrique du Nord',
                it: 'Africa settentrionale'
            },
            {
                en: 'Western Africa',
                es: 'África Occidental',
                fr: "Afrique de l'Ouest",
                it: 'Africa occidentale'
            },
            {
                en: 'Middle Africa',
                es: 'África Central',
                fr: 'Afrique centrale',
                it: 'Africa centrale'
            },
            {
                en: 'Eastern Africa',
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
                en: 'Western Asia',
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
                en: 'Eastern Asia',
                es: 'Asia Oriental',
                fr: "Asie de l'Est",
                it: 'Asia orientale'
            },
            {
                en: 'South-Eastern Asia',
                es: 'Asia Sudoriental',
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
            },
            {
                en: 'Southeast Europe',
                es: 'Europa del Sudeste',
                fr: 'Europe du Sud-Est',
                it: 'Europa sudorientale'
            }
        ]
    },
    {
        name: { en: 'Oceania', es: 'Oceanía', fr: 'Océanie', it: 'Oceania' },
        regions: [
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
            },
            {
                en: 'Australia and New Zealand',
                es: 'Australia y Nueva Zelanda',
                fr: 'Australie et Nouvelle-Zélande',
                it: 'Australia e Nuova Zelanda'
            }
        ]
    }
];

type Currency = {
    name: string;
    symbol: string;
};

export const CURRENCIES: Currency[] = [
    {name: 'Jordanian dinar', symbol: 'د.ا'},
    {name: 'United States dollar', symbol: '$'},
    {name: 'Serbian dinar', symbol: 'дин.'},
    {name: 'Euro', symbol: '€'},
    {name: 'Bermudian dollar', symbol: '$'},
    {name: 'Bolivian boliviano', symbol: 'Bs.'},
    {name: 'Libyan dinar', symbol: 'ل.د'},
    {name: 'West African CFA franc', symbol: 'Fr'},
    {name: 'Armenian dram', symbol: '֏'},
    {name: 'Mauritian rupee', symbol: '₨'},
    {name: 'Maldivian rufiyaa', symbol: '.ރ'},
    {name: 'denar', symbol: 'den'},
    {name: 'Ethiopian birr', symbol: 'Br'},
    {name: 'krone', symbol: 'kr.'},
    {name: 'Iraqi dinar', symbol: 'ع.د'},
    {name: 'Guatemalan quetzal', symbol: 'Q'},
    {name: 'Trinidad and Tobago dollar', symbol: '$'},
    {name: 'Peruvian sol', symbol: 'S/ '},
    {name: 'Surinamese dollar', symbol: '$'},
    {name: 'Swedish krona', symbol: 'kr'},
    {name: 'CFP franc', symbol: '₣'},
    {name: 'Falkland Islands pound', symbol: '£'},
    {name: 'Zimbabwean dollar', symbol: '$'},
    {name: 'Saudi riyal', symbol: 'ر.س'},
    {name: 'United Arab Emirates dirham', symbol: 'د.إ'},
    {name: 'Afghan afghani', symbol: '؋'},
    {name: 'Central African CFA franc', symbol: 'Fr'},
    {name: 'Panamanian balboa', symbol: 'B/.'},
    {name: 'Syrian pound', symbol: '£'},
    {name: 'Vanuatu vatu', symbol: 'Vt'},
    {name: 'Honduran lempira', symbol: 'L'},
    {name: 'Australian dollar', symbol: '$'},
    {name: 'Kiribati dollar', symbol: '$'},
    {name: 'Chilean peso', symbol: '$'},
    {name: 'Eastern Caribbean dollar', symbol: '$'},
    {name: 'Mexican peso', symbol: '$'},
    {name: 'Chinese yuan', symbol: '¥'},
    {name: 'South Sudanese pound', symbol: '£'},
    {name: 'Swazi lilangeni', symbol: 'L'},
    {name: 'South African rand', symbol: 'R'},
    {name: 'Uzbekistani soʻm', symbol: 'soʻm'},
    {name: 'Indonesian rupiah', symbol: 'Rp'},
    {name: 'Paraguayan guaraní', symbol: '₲'},
    {name: 'Polish złoty', symbol: 'zł'},
    {name: 'Bosnia and Herzegovina convertible mark', symbol: 'No symbol'},
    {name: 'Canadian dollar', symbol: '$'},
    {name: 'Brazilian real', symbol: 'R$'},
    {name: 'Mauritanian ouguiya', symbol: 'UM'},
    {name: 'Israeli new shekel', symbol: '₪'},
    {name: 'Netherlands Antillean guilder', symbol: 'ƒ'},
    {name: 'Brunei dollar', symbol: '$'},
    {name: 'Singapore dollar', symbol: '$'},
    {name: 'Angolan kwanza', symbol: 'Kz'},
    {name: 'Belarusian ruble', symbol: 'Br'},
    {name: 'Turkish lira', symbol: '₺'},
    {name: 'Gibraltar pound', symbol: '£'},
    {name: 'Bhutanese ngultrum', symbol: 'Nu.'},
    {name: 'Indian rupee', symbol: '₹'},
    {name: 'Venezuelan bolívar soberano', symbol: 'Bs.S.'},
    {name: 'Qatari riyal', symbol: 'ر.ق'},
    {name: 'Czech koruna', symbol: 'Kč'},
    {name: 'Kuwaiti dinar', symbol: 'د.ك'},
    {name: 'New Zealand dollar', symbol: '$'},
    {name: 'Jamaican dollar', symbol: '$'},
    {name: 'Cayman Islands dollar', symbol: '$'},
    {name: 'Pakistani rupee', symbol: '₨'},
    {name: 'Kazakhstani tenge', symbol: '₸'},
    {name: 'Bahraini dinar', symbol: '.د.ب'},
    {name: 'Fijian dollar', symbol: '$'},
    {name: 'Icelandic króna', symbol: 'kr'},
    {name: 'Burmese kyat', symbol: 'Ks'},
    {name: 'Bangladeshi taka', symbol: '৳'},
    {name: 'Philippine peso', symbol: '₱'},
    {name: 'Nepalese rupee', symbol: '₨'},
    {name: 'Yemeni rial', symbol: '﷼'},
    {name: 'South Korean won', symbol: '₩'},
    {name: 'Danish krone', symbol: 'kr'},
    {name: 'Omani rial', symbol: 'ر.ع.'},
    {name: 'Eritrean nakfa', symbol: 'Nfk'},
    {name: 'Iranian rial', symbol: '﷼'},
    {name: 'Tanzanian shilling', symbol: 'Sh'},
    {name: 'Solomon Islands dollar', symbol: '$'},
    {name: 'Kenyan shilling', symbol: 'Sh'},
    {name: 'Dominican peso', symbol: '$'},
    {name: 'British pound', symbol: '£'},
    {name: 'Guernsey pound', symbol: '£'},
    {name: 'Rwandan franc', symbol: 'Fr'},
    {name: 'Tuvaluan dollar', symbol: '$'},
    {name: 'New Taiwan dollar', symbol: '$'},
    {name: 'Guyanese dollar', symbol: '$'},
    {name: 'Seychellois rupee', symbol: '₨'},
    {name: 'North Korean won', symbol: '₩'},
    {name: 'Botswana pula', symbol: 'P'},
    {name: 'Cambodian riel', symbol: '៛'},
    {name: 'Barbadian dollar', symbol: '$'},
    {name: 'Colombian peso', symbol: '$'},
    {name: 'Ukrainian hryvnia', symbol: '₴'},
    {name: 'Namibian dollar', symbol: '$'},
    {name: 'Tongan paʻanga', symbol: 'T$'},
    {name: 'Argentine peso', symbol: '$'},
    {name: 'Costa Rican colón', symbol: '₡'},
    {name: 'Ghanaian cedi', symbol: '₵'},
    {name: 'Pound sterling', symbol: '£'},
    {name: 'Saint Helena pound', symbol: '£'},
    {name: 'Egyptian pound', symbol: 'E£'},
    {name: 'Jordanian dinar', symbol: 'JD'},
    {name: 'Cuban convertible peso', symbol: '$'},
    {name: 'Cuban peso', symbol: '$'},
    {name: 'Hungarian forint', symbol: 'Ft'},
    {name: 'Belize dollar', symbol: '$'},
    {name: 'Bahamian dollar', symbol: '$'},
    {name: 'Aruban florin', symbol: 'ƒ'},
    {name: 'São Tomé and Príncipe dobra', symbol: 'Db'},
    {name: 'Russian ruble', symbol: '₽'},
    {name: 'Faroese króna', symbol: 'kr'},
    {name: 'Nicaraguan córdoba', symbol: 'C$'},
    {name: 'Tunisian dinar', symbol: 'د.ت'},
    {name: 'Congolese franc', symbol: 'FC'},
    {name: 'krone', symbol: 'kr'},
    {name: 'Sierra Leonean leone', symbol: 'Le'},
    {name: 'Lesotho loti', symbol: 'L'},
    {name: 'Djiboutian franc', symbol: 'Fr'},
    {name: 'Sri Lankan rupee', symbol: 'Rs  රු'},
    {name: 'Samoan tālā', symbol: 'T'},
    {name: 'Turkmenistan manat', symbol: 'm'},
    {name: 'Moldovan leu', symbol: 'L'},
    {name: 'Swiss franc', symbol: 'Fr'},
    {name: 'Malawian kwacha', symbol: 'MK'},
    {name: 'Lebanese pound', symbol: 'ل.ل'},
    {name: 'Mongolian tögrög', symbol: '₮'},
    {name: 'Norwegian krone', symbol: 'kr'},
    {name: 'Thai baht', symbol: '฿'},
    {name: 'Nigerian naira', symbol: '₦'},
    {name: 'Cape Verdean escudo', symbol: 'Esc'},
    {name: 'Jersey pound', symbol: '£'},
    {name: 'Algerian dinar', symbol: 'د.ج'},
    {name: 'Lao kip', symbol: '₭'},
    {name: 'Azerbaijani manat', symbol: '₼'},
    {name: 'Moroccan dirham', symbol: 'د.م.'},
    {name: 'Bulgarian lev', symbol: 'лв'},
    {name: 'Burundian franc', symbol: 'Fr'},
    {name: 'Ugandan shilling', symbol: 'Sh'},
    {name: 'Mozambican metical', symbol: 'MT'},
    {name: 'lari', symbol: '₾'},
    {name: 'Romanian leu', symbol: 'lei'},
    {name: 'Vietnamese đồng', symbol: '₫'},
    {name: 'Algerian dinar', symbol: 'دج'},
    {name: 'Moroccan dirham', symbol: 'DH'},
    {name: 'Japanese yen', symbol: '¥'},
    {name: 'Egyptian pound', symbol: '£'},
    {name: 'Liberian dollar', symbol: '$'},
    {name: 'Haitian gourde', symbol: 'G'},
    {name: 'Papua New Guinean kina', symbol: 'K'},
    {name: 'Hong Kong dollar', symbol: '$'},
    {name: 'Kyrgyzstani som', symbol: 'с'},
    {name: 'Malagasy ariary', symbol: 'Ar'},
    {name: 'dalasi', symbol: 'D'},
    {name: 'Malaysian ringgit', symbol: 'RM'},
    {name: 'Somali shilling', symbol: 'Sh'},
    {name: 'Albanian lek', symbol: 'L'},
    {name: 'Zambian kwacha', symbol: 'ZK'},
    {name: 'Cook Islands dollar', symbol: '$'},
    {name: 'Guinean franc', symbol: 'Fr'},
    {name: 'Comorian franc', symbol: 'Fr'},
    {name: 'Swiss franc', symbol: 'Fr.'},
    {name: 'Manx pound', symbol: '£'},
    {name: 'Sudanese pound', symbol: 'No symbol'},
    {name: 'Tajikistani somoni', symbol: 'ЅМ'},
    {name: 'Uruguayan peso', symbol: '$'}
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
        code: 'ABW',
        name:
        {
            fr: "Aruba",
            en: "Aruba",
            it: "Aruba",
            es: "Aruba"
        },
        capital:
        {
            fr: "Oranjestad",
            en: "Oranjestad",
            it: "Oranjestad",
            es: "Oranjestad"
        },
        official_name:
        {
            fr: "Aruba",
            en: "Aruba",
            it: "Aruba",
            es: "Aruba"
        },
        region: 'Caribbean',
        population: 106766,
        google_maps_link: 'https://goo.gl/maps/8hopbQqifHAgyZyg8',
        flag: 'https://flagcdn.com/w320/aw.png',
        currencies: [
        {
            'name': 'Aruban florin',
            'symbol': 'ƒ'
        }]
    },
    {
        code: 'AFG',
        name:
        {
            fr: "Afghanistan",
            en: "Afghanistan",
            it: "Afghanistan",
            es: "Afganistán"
        },
        capital:
        {
            fr: "Kaboul",
            en: "Kabul",
            it: "Kabul",
            es: "Kabul"
        },
        official_name:
        {
            fr: "République islamique d'Afghanistan",
            en: "Islamic Republic of Afghanistan",
            it: "Repubblica Islamica dell'Afghanistan",
            es: "República Islámica de Afganistán"
        },
        region: 'Southern Asia',
        population: 40218234,
        google_maps_link: 'https://goo.gl/maps/BXBGw7yUUFknCfva9',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
        currencies: [
        {
            'name': 'Afghan afghani',
            'symbol': '؋'
        }]
    },
    {
        code: 'AGO',
        name:
        {
            fr: "Angola",
            en: "Angola",
            it: "Angola",
            es: "Angola"
        },
        capital:
        {
            fr: "Luanda",
            en: "Luanda",
            it: "Luanda",
            es: "Luanda"
        },
        official_name:
        {
            fr: "République d'Angola",
            en: "Republic of Angola",
            it: "Repubblica di Angola",
            es: "República de Angola"
        },
        region: 'Middle Africa',
        population: 32866268,
        google_maps_link: 'https://goo.gl/maps/q42Qbf1BmQL3fuZg9',
        flag: 'https://flagcdn.com/w320/ao.png',
        currencies: [
        {
            'name': 'Angolan kwanza',
            'symbol': 'Kz'
        }]
    },
    {
        code: 'AIA',
        name:
        {
            fr: "Anguilla",
            en: "Anguilla",
            it: "Anguilla",
            es: "Anguila"
        },
        capital:
        {
            fr: "The Valley",
            en: "The Valley",
            it: "The Valley",
            es: "The Valley"
        },
        official_name:
        {
            fr: "Anguilla",
            en: "Anguilla",
            it: "Anguilla",
            es: "Anguila"
        },
        region: 'Caribbean',
        population: 13452,
        google_maps_link: 'https://goo.gl/maps/3KgLnEyN7amdno2p9',
        flag: 'https://flagcdn.com/w320/ai.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'ALA',
        name:
        {
            fr: "Îles Åland",
            en: "Åland Islands",
            it: "Isole Åland",
            es: "Islas Åland"
        },
        capital:
        {
            fr: "Mariehamn",
            en: "Mariehamn",
            it: "Mariehamn",
            es: "Mariehamn"
        },
        official_name:
        {
            fr: "Îles Åland",
            en: "Åland Islands",
            it: "Isole Åland",
            es: "Islas Åland"
        },
        region: 'Northern Europe',
        population: 29458,
        google_maps_link: 'https://goo.gl/maps/ewFb3vYsfUmVCoSb8',
        flag: 'https://flagcdn.com/w320/ax.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'ALB',
        name:
        {
            fr: "Albanie",
            en: "Albania",
            it: "Albania",
            es: "Albania"
        },
        capital:
        {
            fr: "Tirana",
            en: "Tirana",
            it: "Tirana",
            es: "Tirana"
        },
        official_name:
        {
            fr: "République d'Albanie",
            en: "Republic of Albania",
            it: "Repubblica d'Albania",
            es: "República de Albania"
        },
        region: 'Southeast Europe',
        population: 2837743,
        google_maps_link: 'https://goo.gl/maps/BzN9cTuj68ZA8SyZ8',
        flag: 'https://flagcdn.com/w320/al.png',
        currencies: [
        {
            'name': 'Albanian lek',
            'symbol': 'L'
        }]
    },
    {
        code: 'AND',
        name:
        {
            fr: "Andorre",
            en: "Andorra",
            it: "Andorra",
            es: "Andorra"
        },
        capital:
        {
            fr: "Andorre-la-Vieille",
            en: "Andorra la Vella",
            it: "Andorra la Vella",
            es: "Andorra la Vella"
        },
        official_name:
        {
            fr: "Principauté d'Andorre",
            en: "Principality of Andorra",
            it: "Principato di Andorra",
            es: "Principado de Andorra"
        },
        region: 'Southern Europe',
        population: 77265,
        google_maps_link: 'https://goo.gl/maps/JqAnacWE2qEznKgw7',
        flag: 'https://flagcdn.com/w320/ad.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'ARE',
        name:
        {
            fr: "Émirats arabes unis",
            en: "United Arab Emirates",
            it: "Emirati Arabi Uniti",
            es: "Emiratos Árabes Unidos"
        },
        capital:
        {
            fr: "Abou Dabi",
            en: "Abu Dhabi",
            it: "Abu Dhabi",
            es: "Abu Dabi"
        },
        official_name:
        {
            fr: "Émirats arabes unis",
            en: "United Arab Emirates",
            it: "Emirati Arabi Uniti",
            es: "Emiratos Árabes Unidos"
        },
        region: 'Western Asia',
        population: 9890400,
        google_maps_link: 'https://goo.gl/maps/AZZTDA6GzVAnKMVd8',
        flag: 'https://flagcdn.com/w320/ae.png',
        currencies: [
        {
            'name': 'United Arab Emirates dirham',
            'symbol': 'د.إ'
        }]
    },
    {
        code: 'ARG',
        name:
        {
            fr: "Argentine",
            en: "Argentina",
            it: "Argentina",
            es: "Argentina"
        },
        capital:
        {
            fr: "Buenos Aires",
            en: "Buenos Aires",
            it: "Buenos Aires",
            es: "Buenos Aires"
        },
        official_name:
        {
            fr: "République argentine",
            en: "Argentine Republic",
            it: "Repubblica Argentina",
            es: "República Argentina"
        },
        region: 'South America',
        population: 45376763,
        google_maps_link: 'https://goo.gl/maps/Z9DXNxhf2o93kvyc6',
        flag: 'https://flagcdn.com/w320/ar.png',
        currencies: [
        {
            'name': 'Argentine peso',
            'symbol': '$'
        }]
    },
    {
        code: 'ARM',
        name:
        {
            fr: "Arménie",
            en: "Armenia",
            it: "Armenia",
            es: "Armenia"
        },
        capital:
        {
            fr: "Erevan",
            en: "Yerevan",
            it: "Yerevan",
            es: "Ereván"
        },
        official_name:
        {
            fr: "République d'Arménie",
            en: "Republic of Armenia",
            it: "Repubblica di Armenia",
            es: "República de Armenia"
        },
        region: 'Western Asia',
        population: 2963234,
        google_maps_link: 'https://goo.gl/maps/azWUtK9bUQYEyccbA',
        flag: 'https://flagcdn.com/w320/am.png',
        currencies: [
        {
            'name': 'Armenian dram',
            'symbol': '֏'
        }]
    },
    {
        code: 'ASM',
        name:
        {
            fr: "Samoa américaines",
            en: "American Samoa",
            it: "Samoa Americane",
            es: "Samoa Americana"
        },
        capital:
        {
            fr: "Pago Pago",
            en: "Pago Pago",
            it: "Pago Pago",
            es: "Pago Pago"
        },
        official_name:
        {
            fr: "Territoire non incorporé des États-Unis",
            en: "American Samoa",
            it: "Territorio non incorporato degli Stati Uniti d'America",
            es: "Territorio no incorporado de los Estados Unidos"
        },
        region: 'Polynesia',
        population: 55197,
        google_maps_link: 'https://goo.gl/maps/Re9ePMjwP1sFCBFA6',
        flag: 'https://flagcdn.com/w320/as.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'ATG',
        name:
        {
            fr: "Antigua-et-Barbuda",
            en: "Antigua and Barbuda",
            it: "Antigua e Barbuda",
            es: "Antigua y Barbuda"
        },
        capital:
        {
            fr: "Saint John's",
            en: "Saint John's",
            it: "Saint John's",
            es: "Saint John's"
        },
        official_name:
        {
            fr: "Antigua-et-Barbuda",
            en: "Antigua and Barbuda",
            it: "Antigua e Barbuda",
            es: "Antigua y Barbuda"
        },
        region: 'Caribbean',
        population: 97928,
        google_maps_link: 'https://goo.gl/maps/fnye4wGJ1RzC9jpX9',
        flag: 'https://flagcdn.com/w320/ag.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'AUS',
        name:
        {
            fr: "Australie",
            en: "Australia",
            it: "Australia",
            es: "Australia"
        },
        capital:
        {
            fr: "Canberra",
            en: "Canberra",
            it: "Canberra",
            es: "Canberra"
        },
        official_name:
        {
            fr: "Commonwealth d'Australie",
            en: "Commonwealth of Australia",
            it: "Commonwealth dell'Australia",
            es: "Mancomunidad de Australia"
        },
        region: 'Australia and New Zealand',
        population: 25687041,
        google_maps_link: 'https://goo.gl/maps/DcjaDa7UbhnZTndH6',
        flag: 'https://flagcdn.com/w320/au.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'AUT',
        name:
        {
            fr: "Autriche",
            en: "Austria",
            it: "Austria",
            es: "Austria"
        },
        capital:
        {
            fr: "Vienne",
            en: "Vienna",
            it: "Vienna",
            es: "Viena"
        },
        official_name:
        {
            fr: "République d'Autriche",
            en: "Republic of Austria",
            it: "Repubblica d'Austria",
            es: "República de Austria"
        },
        region: 'Central Europe',
        population: 8917205,
        google_maps_link: 'https://goo.gl/maps/pCWpWQhznHyRzQcu9',
        flag: 'https://flagcdn.com/w320/at.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'AZE',
        name:
        {
            fr: "Azerbaïdjan",
            en: "Azerbaijan",
            it: "Azerbaigian",
            es: "Azerbaiyán"
        },
        capital:
        {
            fr: "Bakou",
            en: "Baku",
            it: "Baku",
            es: "Bakú"
        },
        official_name:
        {
            fr: "République d'Azerbaïdjan",
            en: "Republic of Azerbaijan",
            it: "Repubblica dell'Azerbaigian",
            es: "República de Azerbaiyán"
        },
        region: 'Western Asia',
        population: 10110116,
        google_maps_link: 'https://goo.gl/maps/az3Zz7ar2aoB9AUc6',
        flag: 'https://flagcdn.com/w320/az.png',
        currencies: [
        {
            'name': 'Azerbaijani manat',
            'symbol': '₼'
        }]
    },
    {
        code: 'BDI',
        name:
        {
            fr: "Burundi",
            en: "Burundi",
            it: "Burundi",
            es: "Burundi"
        },
        capital:
        {
            fr: "Bujumbura",
            en: "Gitega",
            it: "Bujumbura",
            es: "Buyumbura"
        },
        official_name:
        {
            fr: "République du Burundi",
            en: "Republic of Burundi",
            it: "Repubblica del Burundi",
            es: "República de Burundi"
        },
        region: 'Eastern Africa',
        population: 11890781,
        google_maps_link: 'https://goo.gl/maps/RXPWoRrB9tfrJpUG7',
        flag: 'https://flagcdn.com/w320/bi.png',
        currencies: [
        {
            'name': 'Burundian franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'BEL',
        name:
        {
            fr: "Belgique",
            en: "Belgium",
            it: "Belgio",
            es: "Bélgica"
        },
        capital:
        {
            fr: "Bruxelles",
            en: "Brussels",
            it: "Bruxelles",
            es: "Bruselas"
        },
        official_name:
        {
            fr: "Royaume de Belgique",
            en: "Kingdom of Belgium",
            it: "Regno del Belgio",
            es: "Reino de Bélgica"
        },
        region: 'Western Europe',
        population: 11555997,
        google_maps_link: 'https://goo.gl/maps/UQQzat85TCtPRXAL8',
        flag: 'https://flagcdn.com/w320/be.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'BEN',
        name:
        {
            fr: "Bénin",
            en: "Benin",
            it: "Benin",
            es: "Benín"
        },
        capital:
        {
            fr: "Porto-Novo",
            en: "Porto-Novo",
            it: "Porto Novo",
            es: "Porto Novo"
        },
        official_name:
        {
            fr: "République du Bénin",
            en: "Republic of Benin",
            it: "Repubblica del Benin",
            es: "República de Benín"
        },
        region: 'Western Africa',
        population: 12123198,
        google_maps_link: 'https://goo.gl/maps/uMw1BsHEXQYgVFFu6',
        flag: 'https://flagcdn.com/w320/bj.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'BES',
        name:
        {
            fr: "Pays-Bas caribéens",
            en: "Caribbean Netherlands",
            it: "Bonaire, Sint Eustatius e Saba",
            es: "Países Bajos Caribeños"
        },
        capital:
        {
            fr: "Kralendijk",
            en: "Kralendijk",
            it: "Kralendijk",
            es: "Kralendijk"
        },
        official_name:
        {
            fr: "Pays-Bas caribéens",
            en: "Bonaire, Sint Eustatius and Saba",
            it: "Bonaire, Sint Eustatius e Saba",
            es: "Países Bajos Caribeños"
        },
        region: 'Caribbean',
        population: 25987,
        google_maps_link: 'https://goo.gl/maps/4XVes1P6uEDTz77WA',
        flag: 'https://flagcdn.com/w320/bq.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BFA',
        name:
        {
            fr: "Burkina Faso",
            en: "Burkina Faso",
            it: "Burkina Faso",
            es: "Burkina Faso"
        },
        capital:
        {
            fr: "Ouagadougou",
            en: "Ouagadougou",
            it: "Uagadugu",
            es: "Uagadugú"
        },
        official_name:
        {
            fr: "République du Burkina Faso",
            en: "Burkina Faso",
            it: "Burkina Faso",
            es: "Burkina Faso"
        },
        region: 'Western Africa',
        population: 20903278,
        google_maps_link: 'https://goo.gl/maps/rKRmpcMbFher2ozb7',
        flag: 'https://flagcdn.com/w320/bf.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'BGD',
        name:
        {
            fr: "Bangladesh",
            en: "Bangladesh",
            it: "Bangladesh",
            es: "Bangladés"
        },
        capital:
        {
            fr: "Dacca",
            en: "Dhaka",
            it: "Dacca",
            es: "Daca"
        },
        official_name:
        {
            fr: "République populaire du Bangladesh",
            en: "People's Republic of Bangladesh",
            it: "Repubblica Popolare del Bangladesh",
            es: "República Popular de Bangladés"
        },
        region: 'Southern Asia',
        population: 164689383,
        google_maps_link: 'https://goo.gl/maps/op6gmLbHcvv6rLhH6',
        flag: 'https://flagcdn.com/w320/bd.png',
        currencies: [
        {
            'name': 'Bangladeshi taka',
            'symbol': '৳'
        }]
    },
    {
        code: 'BGR',
        name:
        {
            fr: "Bulgarie",
            en: "Bulgaria",
            it: "Bulgaria",
            es: "Bulgaria"
        },
        capital:
        {
            fr: "Sofia",
            en: "Sofia",
            it: "Sofia",
            es: "Sofía"
        },
        official_name:
        {
            fr: "République de Bulgarie",
            en: "Republic of Bulgaria",
            it: "Repubblica di Bulgaria",
            es: "República de Bulgaria"
        },
        region: 'Southeast Europe',
        population: 6927288,
        google_maps_link: 'https://goo.gl/maps/F5uAhDGWzc3BrHfm9',
        flag: 'https://flagcdn.com/w320/bg.png',
        currencies: [
        {
            'name': 'Bulgarian lev',
            'symbol': 'лв'
        }]
    },
    {
        code: 'BHR',
        name:
        {
            fr: "Bahreïn",
            en: "Bahrain",
            it: "Bahrein",
            es: "Baréin"
        },
        capital:
        {
            fr: "Manama",
            en: "Manama",
            it: "Manama",
            es: "Manama"
        },
        official_name:
        {
            fr: "Royaume de Bahreïn",
            en: "Kingdom of Bahrain",
            it: "Regno del Bahrein",
            es: "Reino de Baréin"
        },
        region: 'Western Asia',
        population: 1701583,
        google_maps_link: 'https://goo.gl/maps/5Zue99Zc6vFBHxzJ7',
        flag: 'https://flagcdn.com/w320/bh.png',
        currencies: [
        {
            'name': 'Bahraini dinar',
            'symbol': '.د.ب'
        }]
    },
    {
        code: 'BHS',
        name:
        {
            fr: "Bahamas",
            en: "Bahamas",
            it: "Bahamas",
            es: "Bahamas"
        },
        capital:
        {
            fr: "Nassau",
            en: "Nassau",
            it: "Nassau",
            es: "Nasáu"
        },
        official_name:
        {
            fr: "Commonwealth des Bahamas",
            en: "Commonwealth of the Bahamas",
            it: "Commonwealth delle Bahamas",
            es: "Mancomunidad de las Bahamas"
        },
        region: 'Caribbean',
        population: 393248,
        google_maps_link: 'https://goo.gl/maps/1YzRs1BZrG8p8pmVA',
        flag: 'https://flagcdn.com/w320/bs.png',
        currencies: [
        {
            'name': 'Bahamian dollar',
            'symbol': '$'
        },
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BIH',
        name:
        {
            fr: "Bosnie-Herzégovine",
            en: "Bosnia and Herzegovina",
            it: "Bosnia ed Erzegovina",
            es: "Bosnia y Herzegovina"
        },
        capital:
        {
            fr: "Sarajevo",
            en: "Sarajevo",
            it: "Sarajevo",
            es: "Sarajevo"
        },
        official_name:
        {
            fr: "Bosnie-Herzégovine",
            en: "Bosnia and Herzegovina",
            it: "Bosnia ed Erzegovina",
            es: "Bosnia y Herzegovina"
        },
        region: 'Southeast Europe',
        population: 3280815,
        google_maps_link: 'https://www.google.com/maps/place/Bosnia+and+Herzegovina',
        flag: 'https://flagcdn.com/w320/ba.png',
        currencies: [
        {
            'name': 'Bosnia and Herzegovina convertible mark',
            'symbol': 'No symbol'
        }]
    },
    {
        code: 'BLM',
        name:
        {
            fr: "Saint-Barthélemy",
            en: "Saint Barthélemy",
            it: "Saint Barthélemy",
            es: "San Bartolomé"
        },
        capital:
        {
            fr: "Gustavia",
            en: "Gustavia",
            it: "Gustavia",
            es: "Gustavia"
        },
        official_name:
        {
            fr: "Collectivité de Saint-Barthélemy",
            en: "Collectivity of Saint Barthélemy",
            it: "Saint Barthélemy",
            es: "Colectividad de San Bartolomé"
        },
        region: 'Caribbean',
        population: 4255,
        google_maps_link: 'https://goo.gl/maps/Mc7GqH466S7AAk297',
        flag: 'https://flagcdn.com/w320/bl.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'BLR',
        name:
        {
            fr: "Biélorussie",
            en: "Belarus",
            it: "Bielorussia",
            es: "Bielorrusia"
        },
        capital:
        {
            fr: "Minsk",
            en: "Minsk",
            it: "Minsk",
            es: "Minsk"
        },
        official_name:
        {
            fr: "République de Biélorussie",
            en: "Republic of Belarus",
            it: "Repubblica di Bielorussia",
            es: "República de Belarús"
        },
        region: 'Eastern Europe',
        population: 9398861,
        google_maps_link: 'https://goo.gl/maps/PJUDU3EBPSszCQcu6',
        flag: 'https://flagcdn.com/w320/by.png',
        currencies: [
        {
            'name': 'Belarusian ruble',
            'symbol': 'Br'
        }]
    },
    {
        code: 'BLZ',
        name:
        {
            fr: "Belize",
            en: "Belize",
            it: "Belize",
            es: "Belice"
        },
        capital:
        {
            fr: "Belmopan",
            en: "Belmopan",
            it: "Belmopan",
            es: "Belmopán"
        },
        official_name:
        {
            fr: "Belize",
            en: "Belize",
            it: "Belize",
            es: "Belice"
        },
        region: 'Central America',
        population: 397621,
        google_maps_link: 'https://goo.gl/maps/jdCccpdLodm1uTmo9',
        flag: 'https://flagcdn.com/w320/bz.png',
        currencies: [
        {
            'name': 'Belize dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BMU',
        name:
        {
            fr: "Bermudes",
            en: "Bermuda",
            it: "Bermuda",
            es: "Bermudas"
        },
        capital:
        {
            fr: "Hamilton",
            en: "Hamilton",
            it: "Hamilton",
            es: "Hamilton"
        },
        official_name:
        {
            fr: "Bermudes",
            en: "Bermuda",
            it: "Bermuda",
            es: "Islas Bermudas"
        },
        region: 'North America',
        population: 63903,
        google_maps_link: 'https://goo.gl/maps/NLsRGNjTzDghTtAJA',
        flag: 'https://flagcdn.com/w320/bm.png',
        currencies: [
        {
            'name': 'Bermudian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BOL',
        name:
        {
            fr: "Bolivie",
            en: "Bolivia",
            it: "Bolivia",
            es: "Bolivia"
        },
        capital:
        {
            fr: "La Paz",
            en: "Sucre",
            it: "La Paz",
            es: "La Paz"
        },
        official_name:
        {
            fr: "État plurinational de Bolivie",
            en: "Plurinational State of Bolivia",
            it: "Stato Plurinazionale di Bolivia",
            es: "Estado Plurinacional de Bolivia"
        },
        region: 'South America',
        population: 11673029,
        google_maps_link: 'https://goo.gl/maps/9DfnyfbxNM2g5U9b9',
        flag: 'https://flagcdn.com/w320/bo.png',
        currencies: [
        {
            'name': 'Bolivian boliviano',
            'symbol': 'Bs.'
        }]
    },
    {
        code: 'BRA',
        name:
        {
            fr: "Brésil",
            en: "Brazil",
            it: "Brasile",
            es: "Brasil"
        },
        capital:
        {
            fr: "Brasilia",
            en: "Brasília",
            it: "Brasilia",
            es: "Brasilia"
        },
        official_name:
        {
            fr: "République fédérative du Brésil",
            en: "Federative Republic of Brazil",
            it: "Repubblica Federativa del Brasile",
            es: "República Federativa de Brasil"
        },
        region: 'South America',
        population: 212559409,
        google_maps_link: 'https://goo.gl/maps/waCKk21HeeqFzkNC9',
        flag: 'https://flagcdn.com/w320/br.png',
        currencies: [
        {
            'name': 'Brazilian real',
            'symbol': 'R$'
        }]
    },
    {
        code: 'BRB',
        name:
        {
            fr: "Barbade",
            en: "Barbados",
            it: "Barbados",
            es: "Barbados"
        },
        capital:
        {
            fr: "Bridgetown",
            en: "Bridgetown",
            it: "Bridgetown",
            es: "Bridgetown"
        },
        official_name:
        {
            fr: "Barbade",
            en: "Barbados",
            it: "Barbados",
            es: "Barbados"
        },
        region: 'Caribbean',
        population: 287371,
        google_maps_link: 'https://goo.gl/maps/2m36v8STvbGAWd9c7',
        flag: 'https://flagcdn.com/w320/bb.png',
        currencies: [
        {
            'name': 'Barbadian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BRN',
        name:
        {
            fr: "Brunei",
            en: "Brunei",
            it: "Brunei",
            es: "Brunéi"
        },
        capital:
        {
            fr: "Bandar Seri Begawan",
            en: "Bandar Seri Begawan",
            it: "Bandar Seri Begawan",
            es: "Bandar Seri Begawan"
        },
        official_name:
        {
            fr: "État de Brunei, de Darussalam",
            en: "Nation of Brunei, Abode of Peace",
            it: "Sultanato del Brunei",
            es: "Estado de Brunéi, Abode de Paz"
        },
        region: 'South-Eastern Asia',
        population: 437483,
        google_maps_link: 'https://goo.gl/maps/4jb4CqBXhr8vNh579',
        flag: 'https://flagcdn.com/w320/bn.png',
        currencies: [
        {
            'name': 'Brunei dollar',
            'symbol': '$'
        },
        {
            'name': 'Singapore dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'BTN',
        name:
        {
            fr: "Bhoutan",
            en: "Bhutan",
            it: "Bhutan",
            es: "Bután"
        },
        capital:
        {
            fr: "Thimphou",
            en: "Thimphu",
            it: "Thimphu",
            es: "Timbu"
        },
        official_name:
        {
            fr: "Royaume du Bhoutan",
            en: "Kingdom of Bhutan",
            it: "Regno del Bhutan",
            es: "Reino de Bután"
        },
        region: 'Southern Asia',
        population: 771612,
        google_maps_link: 'https://goo.gl/maps/VEfXXBftTFLUpNgp8',
        flag: 'https://flagcdn.com/w320/bt.png',
        currencies: [
        {
            'name': 'Bhutanese ngultrum',
            'symbol': 'Nu.'
        },
        {
            'name': 'Indian rupee',
            'symbol': '₹'
        }]
    },
    {
        code: 'BWA',
        name:
        {
            fr: "Botswana",
            en: "Botswana",
            it: "Botswana",
            es: "Botsuana"
        },
        capital:
        {
            fr: "Gaborone",
            en: "Gaborone",
            it: "Gaborone",
            es: "Gaborone"
        },
        official_name:
        {
            fr: "République du Botswana",
            en: "Republic of Botswana",
            it: "Repubblica del Botswana",
            es: "República de Botsuana"
        },
        region: 'Southern Africa',
        population: 2351625,
        google_maps_link: 'https://goo.gl/maps/E364KeLy6N4JwxwQ8',
        flag: 'https://flagcdn.com/w320/bw.png',
        currencies: [
        {
            'name': 'Botswana pula',
            'symbol': 'P'
        }]
    },
    {
        code: 'CAF',
        name:
        {
            fr: "République centrafricaine",
            en: "Central African Republic",
            it: "Repubblica Centrafricana",
            es: "República Centroafricana"
        },
        capital:
        {
            fr: "Bangui",
            en: "Bangui",
            it: "Bangui",
            es: "Bangui"
        },
        official_name:
        {
            fr: "République centrafricaine",
            en: "Central African Republic",
            it: "Repubblica Centrafricana",
            es: "República Centroafricana"
        },
        region: 'Middle Africa',
        population: 4829764,
        google_maps_link: 'https://goo.gl/maps/51V8dsi2rGYC9n3c9',
        flag: 'https://flagcdn.com/w320/cf.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'CAN',
        name:
        {
            fr: "Canada",
            en: "Canada",
            it: "Canada",
            es: "Canadá"
        },
        capital:
        {
            fr: "Ottawa",
            en: "Ottawa",
            it: "Ottawa",
            es: "Ottawa"
        },
        official_name:
        {
            fr: "Canada",
            en: "Canada",
            it: "Canada",
            es: "Canadá"
        },
        region: 'North America',
        population: 38005238,
        google_maps_link: 'https://goo.gl/maps/jmEVLugreeqiZXxbA',
        flag: 'https://flagcdn.com/w320/ca.png',
        currencies: [
        {
            'name': 'Canadian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'CCK',
        name:
        {
            fr: "Îles Cocos",
            en: "Cocos (Keeling) Islands",
            it: "Territorio delle Isole Cocos (Keeling)",
            es: "Islas Cocos (Keeling)"
        },
        capital:
        {
            fr: "West Island",
            en: "West Island",
            it: "West Island",
            es: "West Island"
        },
        official_name:
        {
            fr: "Territoire des îles Cocos (Keeling)",
            en: "Territory of the Cocos (Keeling) Islands",
            it: "Territorio delle Isole Cocos (Keeling)",
            es: "Territorio de las Islas Cocos (Keeling)"
        },
        region: 'Australia and New Zealand',
        population: 544,
        google_maps_link: 'https://goo.gl/maps/3eCdKVpVfMcZyKcK6',
        flag: 'https://flagcdn.com/w320/cc.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'CHE',
        name:
        {
            fr: "Suisse",
            en: "Switzerland",
            it: "Svizzera",
            es: "Suiza"
        },
        capital:
        {
            fr: "Berne",
            en: "Bern",
            it: "Berna",
            es: "Berna"
        },
        official_name:
        {
            fr: "Confédération suisse",
            en: "Swiss Confederation",
            it: "Confederazione Svizzera",
            es: "Confederación Suiza"
        },
        region: 'Western Europe',
        population: 8654622,
        google_maps_link: 'https://goo.gl/maps/uVuZcXaxSx5jLyEC9',
        flag: 'https://flagcdn.com/w320/ch.png',
        currencies: [
        {
            'name': 'Swiss franc',
            'symbol': 'Fr.'
        }]
    },
    {
        code: 'CHL',
        name:
        {
            fr: "Chili",
            en: "Chile",
            it: "Cile",
            es: "Chile"
        },
        capital:
        {
            fr: "Santiago",
            en: "Santiago",
            it: "Santiago",
            es: "Santiago"
        },
        official_name:
        {
            fr: "République du Chili",
            en: "Republic of Chile",
            it: "Repubblica del Cile",
            es: "República de Chile"
        },
        region: 'South America',
        population: 19116209,
        google_maps_link: 'https://goo.gl/maps/XboxyNHh2fAjCPNn9',
        flag: 'https://flagcdn.com/w320/cl.png',
        currencies: [
        {
            'name': 'Chilean peso',
            'symbol': '$'
        }]
    },
    {
        code: 'CHN',
        name:
        {
            fr: "Chine",
            en: "China",
            it: "Cina",
            es: "China"
        },
        capital:
        {
            fr: "Pékin",
            en: "Beijing",
            it: "Pechino",
            es: "Pekín"
        },
        official_name:
        {
            fr: "République populaire de Chine",
            en: "People's Republic of China",
            it: "Repubblica Popolare Cinese",
            es: "República Popular China"
        },
        region: 'Eastern Asia',
        population: 1402112000,
        google_maps_link: 'https://goo.gl/maps/p9qC6vgiFRRXzvGi7',
        flag: 'https://flagcdn.com/w320/cn.png',
        currencies: [
        {
            'name': 'Chinese yuan',
            'symbol': '¥'
        }]
    },
    {
        code: 'CIV',
        name:
        {
            fr: "Côte d'Ivoire",
            en: "Ivory Coast",
            it: "Costa d'Avorio",
            es: "Costa de Marfil"
        },
        capital:
        {
            fr: "Yamoussoukro",
            en: "Yamoussoukro",
            it: "Yamoussoukro",
            es: "Yamusukro"
        },
        official_name:
        {
            fr: "République de Côte d'Ivoire",
            en: "Republic of Côte d'Ivoire",
            it: "Repubblica di Costa d'Avorio",
            es: "República de Costa de Marfil"
        },
        region: 'Western Africa',
        population: 26378275,
        google_maps_link: 'https://goo.gl/maps/wKsmN7f5qAeNtGjP6',
        flag: 'https://flagcdn.com/w320/ci.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'CMR',
        name:
        {
            fr: "Cameroun",
            en: "Cameroon",
            it: "Camerun",
            es: "Camerún"
        },
        capital:
        {
            fr: "Yaoundé",
            en: "Yaoundé",
            it: "Yaoundé",
            es: "Yaundé"
        },
        official_name:
        {
            fr: "République du Cameroun",
            en: "Republic of Cameroon",
            it: "Repubblica del Camerun",
            es: "República del Camerún"
        },
        region: 'Middle Africa',
        population: 26545864,
        google_maps_link: 'https://goo.gl/maps/JqiipHgFboG3rBJh9',
        flag: 'https://flagcdn.com/w320/cm.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'COD',
        name:
        {
            fr: "Congo-Kinshasa",
            en: "DR Congo",
            it: "Repubblica Democratica del Congo",
            es: "República Democrática del Congo"
        },
        capital:
        {
            fr: "Kinshasa",
            en: "Kinshasa",
            it: "Kinshasa",
            es: "Kinshasa"
        },
        official_name:
        {
            fr: "République démocratique du Congo",
            en: "Democratic Republic of the Congo",
            it: "Repubblica Democratica del Congo",
            es: "República Democrática del Congo"
        },
        region: 'Middle Africa',
        population: 108407721,
        google_maps_link: 'https://goo.gl/maps/KfhNVn6VqdZXWu8n9',
        flag: 'https://flagcdn.com/w320/cd.png',
        currencies: [
        {
            'name': 'Congolese franc',
            'symbol': 'FC'
        }]
    },
    {
        code: 'COG',
        name:
        {
            fr: "République du Congo",
            en: "Republic of the Congo",
            it: "Repubblica del Congo",
            es: "República del Congo"
        },
        capital:
        {
            fr: "Brazzaville",
            en: "Brazzaville",
            it: "Brazzaville",
            es: "Brazzaville"
        },
        official_name:
        {
            fr: "République du Congo",
            en: "Republic of the Congo",
            it: "Repubblica del Congo",
            es: "República del Congo"
        },
        region: 'Middle Africa',
        population: 5657000,
        google_maps_link: 'https://goo.gl/maps/Phf5dDDKdfCtuBTb6',
        flag: 'https://flagcdn.com/w320/cg.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'COK',
        name:
        {
            fr: "Îles Cook",
            en: "Cook Islands",
            it: "Isole Cook",
            es: "Islas Cook"
        },
        capital:
        {
            fr: "Avarua",
            en: "Avarua",
            it: "Avarua",
            es: "Avarua"
        },
        official_name:
        {
            fr: "Îles Cook",
            en: "Cook Islands",
            it: "Isole Cook",
            es: "Islas Cook"
        },
        region: 'Polynesia',
        population: 18100,
        google_maps_link: 'https://goo.gl/maps/nrGZrvWRGB4WHgDC9',
        flag: 'https://flagcdn.com/w320/ck.png',
        currencies: [
        {
            'name': 'Cook Islands dollar',
            'symbol': '$'
        },
        {
            'name': 'New Zealand dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'COL',
        name:
        {
            fr: "Colombie",
            en: "Colombia",
            it: "Colombia",
            es: "Colombia"
        },
        capital:
        {
            fr: "Bogota",
            en: "Bogotá",
            it: "Bogotà",
            es: "Bogotá"
        },
        official_name:
        {
            fr: "République de Colombie",
            en: "Republic of Colombia",
            it: "Repubblica di Colombia",
            es: "República de Colombia"
        },
        region: 'South America',
        population: 50882884,
        google_maps_link: 'https://goo.gl/maps/RdwTG8e7gPwS62oR6',
        flag: 'https://flagcdn.com/w320/co.png',
        currencies: [
        {
            'name': 'Colombian peso',
            'symbol': '$'
        }]
    },
    {
        code: 'COM',
        name:
        {
            fr: "Comores",
            en: "Comoros",
            it: "Comore",
            es: "Comoras"
        },
        capital:
        {
            fr: "Moroni",
            en: "Moroni",
            it: "Moroni",
            es: "Moroni"
        },
        official_name:
        {
            fr: "Union des Comores",
            en: "Union of the Comoros",
            it: "Unione delle Comore",
            es: "Unión de las Comoras"
        },
        region: 'Eastern Africa',
        population: 869595,
        google_maps_link: 'https://goo.gl/maps/eas4GP28C1GyStnu6',
        flag: 'https://flagcdn.com/w320/km.png',
        currencies: [
        {
            'name': 'Comorian franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'CPV',
        name:
        {
            fr: "Cap-Vert",
            en: "Cape Verde",
            it: "Capo Verde",
            es: "Cabo Verde"
        },
        capital:
        {
            fr: "Praia",
            en: "Praia",
            it: "Praia",
            es: "Praia"
        },
        official_name:
        {
            fr: "République du Cap-Vert",
            en: "Republic of Cabo Verde",
            it: "Repubblica di Capo Verde",
            es: "República de Cabo Verde"
        },
        region: 'Western Africa',
        population: 555988,
        google_maps_link: 'https://goo.gl/maps/Kc9vy5ChjuiAgMfXA',
        flag: 'https://flagcdn.com/w320/cv.png',
        currencies: [
        {
            'name': 'Cape Verdean escudo',
            'symbol': 'Esc'
        }]
    },
    {
        code: 'CRI',
        name:
        {
            fr: "Costa Rica",
            en: "Costa Rica",
            it: "Costa Rica",
            es: "Costa Rica"
        },
        capital:
        {
            fr: "San José",
            en: "San José",
            it: "San Jose",
            es: "San José"
        },
        official_name:
        {
            fr: "République du Costa Rica",
            en: "Republic of Costa Rica",
            it: "Repubblica di Costa Rica",
            es: "República de Costa Rica"
        },
        region: 'Central America',
        population: 5094114,
        google_maps_link: 'https://goo.gl/maps/RFiwytjvNrpfKN7k6',
        flag: 'https://flagcdn.com/w320/cr.png',
        currencies: [
        {
            'name': 'Costa Rican colón',
            'symbol': '₡'
        }]
    },
    {
        code: 'CUB',
        name:
        {
            fr: "Cuba",
            en: "Cuba",
            it: "Cuba",
            es: "Cuba"
        },
        capital:
        {
            fr: "La Havane",
            en: "Havana",
            it: "L'Avana",
            es: "La Habana"
        },
        official_name:
        {
            fr: "République de Cuba",
            en: "Republic of Cuba",
            it: "Repubblica di Cuba",
            es: "República de Cuba"
        },
        region: 'Caribbean',
        population: 11326616,
        google_maps_link: 'https://goo.gl/maps/1dDw1QfZspfMUTm99',
        flag: 'https://flagcdn.com/w320/cu.png',
        currencies: [
        {
            'name': 'Cuban convertible peso',
            'symbol': '$'
        },
        {
            'name': 'Cuban peso',
            'symbol': '$'
        }]
    },
    {
        code: 'CUW',
        name:
        {
            fr: "Curaçao",
            en: "Curaçao",
            it: "Curaçao",
            es: "Curazao"
        },
        capital:
        {
            fr: "Willemstad",
            en: "Willemstad",
            it: "Willemstad",
            es: "Willemstad"
        },
        official_name:
        {
            fr: "Curaçao",
            en: "Country of Curaçao",
            it: "Curaçao",
            es: "Curazao"
        },
        region: 'Caribbean',
        population: 155014,
        google_maps_link: 'https://goo.gl/maps/9D3hTeA3qKaRT7S16',
        flag: 'https://flagcdn.com/w320/cw.png',
        currencies: [
        {
            'name': 'Netherlands Antillean guilder',
            'symbol': 'ƒ'
        }]
    },
    {
        code: 'CXR',
        name:
        {
            fr: "Île Christmas",
            en: "Christmas Island",
            it: "Isola di Natale",
            es: "Isla de Navidad"
        },
        capital:
        {
            fr: "Flying Fish Cove",
            en: "Flying Fish Cove",
            it: "Flying Fish Cove",
            es: "Flying Fish Cove"
        },
        official_name:
        {
            fr: "Territoire extérieur de l'Australie",
            en: "Territory of Christmas Island",
            it: "Territorio australiano dell'Isola di Natale",
            es: "Territorio de la Isla de Navidad"
        },
        region: 'Australia and New Zealand',
        population: 2072,
        google_maps_link: 'https://goo.gl/maps/ZC17hHsQZpShN5wk9',
        flag: 'https://flagcdn.com/w320/cx.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'CYM',
        name:
        {
            fr: "Îles Caïmans",
            en: "Cayman Islands",
            it: "Isole Cayman",
            es: "Islas Caimán"
        },
        capital:
        {
            fr: "George Town",
            en: "George Town",
            it: "George Town",
            es: "George Town"
        },
        official_name:
        {
            fr: "Îles Caïmans",
            en: "Cayman Islands",
            it: "Isole Cayman",
            es: "Islas Caimán"
        },
        region: 'Caribbean',
        population: 65720,
        google_maps_link: 'https://goo.gl/maps/P3ZVXX3LH63t91hL8',
        flag: 'https://flagcdn.com/w320/ky.png',
        currencies: [
        {
            'name': 'Cayman Islands dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'CYP',
        name:
        {
            fr: "Chypre",
            en: "Cyprus",
            it: "Cipro",
            es: "Chipre"
        },
        capital:
        {
            fr: "Nicosie",
            en: "Nicosia",
            it: "Nicosia",
            es: "Nicosia"
        },
        official_name:
        {
            fr: "République de Chypre",
            en: "Republic of Cyprus",
            it: "Repubblica di Cipro",
            es: "República de Chipre"
        },
        region: 'Southern Europe',
        population: 1207361,
        google_maps_link: 'https://goo.gl/maps/77hPBRdLid8yD5Bm7',
        flag: 'https://flagcdn.com/w320/cy.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'CZE',
        name:
        {
            fr: "Tchéquie",
            en: "Czechia",
            it: "Repubblica Ceca",
            es: "Chequia"
        },
        capital:
        {
            fr: "Prague",
            en: "Prague",
            it: "Praga",
            es: "Praga"
        },
        official_name:
        {
            fr: "République tchèque",
            en: "Czech Republic",
            it: "Repubblica Ceca",
            es: "República Checa"
        },
        region: 'Central Europe',
        population: 10698896,
        google_maps_link: 'https://goo.gl/maps/47dmgeXMZyhDHyQW8',
        flag: 'https://flagcdn.com/w320/cz.png',
        currencies: [
        {
            'name': 'Czech koruna',
            'symbol': 'Kč'
        }]
    },
    {
        code: 'DEU',
        name:
        {
            fr: "Allemagne",
            en: "Germany",
            it: "Germania",
            es: "Alemania"
        },
        capital:
        {
            fr: "Berlin",
            en: "Berlin",
            it: "Berlino",
            es: "Berlín"
        },
        official_name:
        {
            fr: "République fédérale d'Allemagne",
            en: "Federal Republic of Germany",
            it: "Repubblica Federale di Germania",
            es: "República Federal de Alemania"
        },
        region: 'Western Europe',
        population: 83240525,
        google_maps_link: 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6',
        flag: 'https://flagcdn.com/w320/de.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'DJI',
        name:
        {
            fr: "Djibouti",
            en: "Djibouti",
            it: "Gibuti",
            es: "Yibuti"
        },
        capital:
        {
            fr: "Djibouti",
            en: "Djibouti",
            it: "Gibuti",
            es: "Yibuti"
        },
        official_name:
        {
            fr: "République de Djibouti",
            en: "Republic of Djibouti",
            it: "Repubblica di Gibuti",
            es: "República de Yibuti"
        },
        region: 'Eastern Africa',
        population: 988002,
        google_maps_link: 'https://goo.gl/maps/V1HWfzN3bS1kwf4C6',
        flag: 'https://flagcdn.com/w320/dj.png',
        currencies: [
        {
            'name': 'Djiboutian franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'DMA',
        name:
        {
            fr: "Dominique",
            en: "Dominica",
            it: "Dominica",
            es: "Dominica"
        },
        capital:
        {
            fr: "Roseau",
            en: "Roseau",
            it: "Roseau",
            es: "Roseau"
        },
        official_name:
        {
            fr: "Commonwealth de Dominique",
            en: "Commonwealth of Dominica",
            it: "Commonwealth di Dominica",
            es: "Mancomunidad de Dominica"
        },
        region: 'Caribbean',
        population: 71991,
        google_maps_link: 'https://goo.gl/maps/HSKdHYpFC8oHHuyV7',
        flag: 'https://flagcdn.com/w320/dm.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'DNK',
        name:
        {
            fr: "Danemark",
            en: "Denmark",
            it: "Danimarca",
            es: "Dinamarca"
        },
        capital:
        {
            fr: "Copenhague",
            en: "Copenhagen",
            it: "Copenaghen",
            es: "Copenhague"
        },
        official_name:
        {
            fr: "Royaume de Danemark",
            en: "Kingdom of Denmark",
            it: "Regno di Danimarca",
            es: "Reino de Dinamarca"
        },
        region: 'Northern Europe',
        population: 5831404,
        google_maps_link: 'https://goo.gl/maps/UddGPN7hAyrtpFiT6',
        flag: 'https://flagcdn.com/w320/dk.png',
        currencies: [
        {
            'name': 'Danish krone',
            'symbol': 'kr'
        }]
    },
    {
        code: 'DOM',
        name:
        {
            fr: "République dominicaine",
            en: "Dominican Republic",
            it: "Repubblica Dominicana",
            es: "República Dominicana"
        },
        capital:
        {
            fr: "Saint-Domingue",
            en: "Santo Domingo",
            it: "Santo Domingo",
            es: "Santo Domingo"
        },
        official_name:
        {
            fr: "République dominicaine",
            en: "Dominican Republic",
            it: "Repubblica Dominicana",
            es: "República Dominicana"
        },
        region: 'Caribbean',
        population: 10847904,
        google_maps_link: 'https://goo.gl/maps/soxooTHxEeiAbn3UA',
        flag: 'https://flagcdn.com/w320/do.png',
        currencies: [
        {
            'name': 'Dominican peso',
            'symbol': '$'
        }]
    },
    {
        code: 'DZA',
        name:
        {
            fr: "Algérie",
            en: "Algeria",
            it: "Algeria",
            es: "Argelia"
        },
        capital:
        {
            fr: "Alger",
            en: "Algiers",
            it: "Algeri",
            es: "Argel"
        },
        official_name:
        {
            fr: "République algérienne démocratique et populaire",
            en: "People's Democratic Republic of Algeria",
            it: "Repubblica Democratica Popolare di Algeria",
            es: "República Democrática Popular de Argelia"
        },
        region: 'Northern Africa',
        population: 44700000,
        google_maps_link: 'https://goo.gl/maps/RsAyAfyaiNVb8DpW8',
        flag: 'https://flagcdn.com/w320/dz.png',
        currencies: [
        {
            'name': 'Algerian dinar',
            'symbol': 'د.ج'
        }]
    },
    {
        code: 'ECU',
        name:
        {
            fr: "Équateur",
            en: "Ecuador",
            it: "Ecuador",
            es: "Ecuador"
        },
        capital:
        {
            fr: "Quito",
            en: "Quito",
            it: "Quito",
            es: "Quito"
        },
        official_name:
        {
            fr: "République de l'Équateur",
            en: "Republic of Ecuador",
            it: "Repubblica dell'Ecuador",
            es: "República del Ecuador"
        },
        region: 'South America',
        population: 17643060,
        google_maps_link: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
        flag: 'https://flagcdn.com/w320/ec.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'EGY',
        name:
        {
            fr: "Égypte",
            en: "Egypt",
            it: "Egitto",
            es: "Egipto"
        },
        capital:
        {
            fr: "Le Caire",
            en: "Cairo",
            it: "Il Cairo",
            es: "El Cairo"
        },
        official_name:
        {
            fr: "République arabe d'Égypte",
            en: "Arab Republic of Egypt",
            it: "Repubblica Araba d'Egitto",
            es: "República Árabe de Egipto"
        },
        region: 'Northern Africa',
        population: 102334403,
        google_maps_link: 'https://goo.gl/maps/uoDRhXbsqjG6L7VG7',
        flag: 'https://flagcdn.com/w320/eg.png',
        currencies: [
        {
            'name': 'Egyptian pound',
            'symbol': '£'
        }]
    },
    {
        code: 'ERI',
        name:
        {
            fr: "Érythrée",
            en: "Eritrea",
            it: "Eritrea",
            es: "Eritrea"
        },
        capital:
        {
            fr: "Asmara",
            en: "Asmara",
            it: "Asmara",
            es: "Asmara"
        },
        official_name:
        {
            fr: "État d'Érythrée",
            en: "State of Eritrea",
            it: "Stato di Eritrea",
            es: "Estado de Eritrea"
        },
        region: 'Eastern Africa',
        population: 5352000,
        google_maps_link: 'https://goo.gl/maps/HRyqUpnPwwG6jY5j6',
        flag: 'https://flagcdn.com/w320/er.png',
        currencies: [
        {
            'name': 'Eritrean nakfa',
            'symbol': 'Nfk'
        }]
    },
    {
        code: 'ESH',
        name:
        {
            fr: "Sahara occidental",
            en: "Western Sahara",
            it: "Sahara Occidentale",
            es: "Sahara Occidental"
        },
        capital:
        {
            fr: "Laâyoune",
            en: "El Aaiún",
            it: "Sahara Occidentale",
            es: "El Aaiún"
        },
        official_name:
        {
            fr: "République arabe sahraouie démocratique",
            en: "Sahrawi Arab Democratic Republic",
            it: "Sahara Occidentale",
            es: "República Árabe Saharaui Democrática"
        },
        region: 'Northern Africa',
        population: 510713,
        google_maps_link: 'https://goo.gl/maps/7nU3mB69vP6zQp7A8',
        flag: 'https://flagcdn.com/w320/eh.png',
        currencies: [
        {
            'name': 'Algerian dinar',
            'symbol': 'دج'
        },
        {
            'name': 'Moroccan dirham',
            'symbol': 'DH'
        },
        {
            'name': 'Mauritanian ouguiya',
            'symbol': 'UM'
        }]
    },
    {
        code: 'ESP',
        name:
        {
            fr: "Espagne",
            en: "Spain",
            it: "Spagna",
            es: "España"
        },
        capital:
        {
            fr: "Madrid",
            en: "Madrid",
            it: "Madrid",
            es: "Madrid"
        },
        official_name:
        {
            fr: "Royaume d'Espagne",
            en: "Kingdom of Spain",
            it: "Regno di Spagna",
            es: "Reino de España"
        },
        region: 'Southern Europe',
        population: 47351567,
        google_maps_link: 'https://goo.gl/maps/138JaXW8EZzRVitY9',
        flag: 'https://flagcdn.com/w320/es.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'EST',
        name:
        {
            fr: "Estonie",
            en: "Estonia",
            it: "Estonia",
            es: "Estonia"
        },
        capital:
        {
            fr: "Tallinn",
            en: "Tallinn",
            it: "Tallinn",
            es: "Tallin"
        },
        official_name:
        {
            fr: "République d'Estonie",
            en: "Republic of Estonia",
            it: "Repubblica di Estonia",
            es: "República de Estonia"
        },
        region: 'Northern Europe',
        population: 1331057,
        google_maps_link: 'https://goo.gl/maps/6SsynwGUodL1sDvq8',
        flag: 'https://flagcdn.com/w320/ee.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'ETH',
        name:
        {
            fr: "Éthiopie",
            en: "Ethiopia",
            it: "Etiopia",
            es: "Etiopía"
        },
        capital:
        {
            fr: "Addis-Abeba",
            en: "Addis Ababa",
            it: "Addis Abeba",
            es: "Adís Abeba"
        },
        official_name:
        {
            fr: "République fédérale démocratique d'Éthiopie",
            en: "Federal Democratic Republic of Ethiopia",
            it: "Repubblica Democratica Federale d'Etiopia",
            es: "República Democrática Federal de Etiopía"
        },
        region: 'Eastern Africa',
        population: 114963583,
        google_maps_link: 'https://goo.gl/maps/2Q4hQWCbhuZLj3fG6',
        flag: 'https://flagcdn.com/w320/et.png',
        currencies: [
        {
            'name': 'Ethiopian birr',
            'symbol': 'Br'
        }]
    },
    {
        code: 'FIN',
        name:
        {
            fr: "Finlande",
            en: "Finland",
            it: "Finlandia",
            es: "Finlandia"
        },
        capital:
        {
            fr: "Helsinki",
            en: "Helsinki",
            it: "Helsinki",
            es: "Helsinki"
        },
        official_name:
        {
            fr: "République de Finlande",
            en: "Republic of Finland",
            it: "Repubblica di Finlandia",
            es: "República de Finlandia"
        },
        region: 'Northern Europe',
        population: 5530719,
        google_maps_link: 'https://goo.gl/maps/HjgWDCNKRAYHrkMn8',
        flag: 'https://flagcdn.com/w320/fi.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'FJI',
        name:
        {
            fr: "Fidji",
            en: "Fiji",
            it: "Figi",
            es: "Fiyi"
        },
        capital:
        {
            fr: "Suva",
            en: "Suva",
            it: "Suva",
            es: "Suva"
        },
        official_name:
        {
            fr: "République des Fidji",
            en: "Republic of Fiji",
            it: "Repubblica delle Figi",
            es: "República de Fiyi"
        },
        region: 'Melanesia',
        population: 896444,
        google_maps_link: 'https://goo.gl/maps/r9fhDqoLZdg1zmE99',
        flag: 'https://flagcdn.com/w320/fj.png',
        currencies: [
        {
            'name': 'Fijian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'FLK',
        name:
        {
            fr: "Îles Malouines",
            en: "Falkland Islands",
            it: "Isole Falkland",
            es: "Islas Malvinas"
        },
        capital:
        {
            fr: "Stanley",
            en: "Stanley",
            it: "Porto Stanley",
            es: "Stanley"
        },
        official_name:
        {
            fr: "Îles Malouines",
            en: "Falkland Islands",
            it: "Isole Falkland (Malvine)",
            es: "Islas Malvinas"
        },
        region: 'South America',
        population: 2563,
        google_maps_link: 'https://goo.gl/maps/TZH1x7AGanQKifNk7',
        flag: 'https://flagcdn.com/w320/fk.png',
        currencies: [
        {
            'name': 'Falkland Islands pound',
            'symbol': '£'
        }]
    },
    {
        code: 'FRA',
        name:
        {
            fr: "France",
            en: "France",
            it: "Francia",
            es: "Francia"
        },
        capital:
        {
            fr: "Paris",
            en: "Paris",
            it: "Parigi",
            es: "París"
        },
        official_name:
        {
            fr: "République française",
            en: "French Republic",
            it: "Repubblica Francese",
            es: "República Francesa"
        },
        region: 'Western Europe',
        population: 67391582,
        google_maps_link: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
        flag: 'https://flagcdn.com/w320/fr.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'FRO',
        name:
        {
            fr: "Îles Féroé",
            en: "Faroe Islands",
            it: "Isole Faroe",
            es: "Islas Feroe"
        },
        capital:
        {
            fr: "Tórshavn",
            en: "Tórshavn",
            it: "Tórshavn",
            es: "Tórshavn"
        },
        official_name:
        {
            fr: "Îles Féroé",
            en: "Faroe Islands",
            it: "Isole Faroe",
            es: "Islas Feroe"
        },
        region: 'Northern Europe',
        population: 48865,
        google_maps_link: 'https://goo.gl/maps/6sTru4SmHdEVcNkM6',
        flag: 'https://flagcdn.com/w320/fo.png',
        currencies: [
        {
            'name': 'Danish krone',
            'symbol': 'kr'
        },
        {
            'name': 'Faroese króna',
            'symbol': 'kr'
        }]
    },
    {
        code: 'FSM',
        name:
        {
            fr: "Micronésie",
            en: "Micronesia",
            it: "Micronesia",
            es: "Micronesia"
        },
        capital:
        {
            fr: "Palikir",
            en: "Palikir",
            it: "Palikir",
            es: "Palikir"
        },
        official_name:
        {
            fr: "États fédérés de Micronésie",
            en: "Federated States of Micronesia",
            it: "Stati Federati di Micronesia",
            es: "Estados Federados de Micronesia"
        },
        region: 'Micronesia',
        population: 115021,
        google_maps_link: 'https://goo.gl/maps/LLcnofC5LxZsJXTo8',
        flag: 'https://flagcdn.com/w320/fm.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'GAB',
        name:
        {
            fr: "Gabon",
            en: "Gabon",
            it: "Gabon",
            es: "Gabón"
        },
        capital:
        {
            fr: "Libreville",
            en: "Libreville",
            it: "Libreville",
            es: "Libreville"
        },
        official_name:
        {
            fr: "République gabonaise",
            en: "Gabonese Republic",
            it: "Repubblica Gabonese",
            es: "República Gabonesa"
        },
        region: 'Middle Africa',
        population: 2225728,
        google_maps_link: 'https://goo.gl/maps/vyRSkqw1H1fnq4ry6',
        flag: 'https://flagcdn.com/w320/ga.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'GBR',
        name:
        {
            fr: "Royaume-Uni",
            en: "United Kingdom",
            it: "Regno Unito",
            es: "Reino Unido"
        },
        capital:
        {
            fr: "Londres",
            en: "London",
            it: "Londra",
            es: "Londres"
        },
        official_name:
        {
            fr: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
            en: "United Kingdom of Great Britain and Northern Ireland",
            it: "Regno Unito di Gran Bretagna e Irlanda del Nord",
            es: "Reino Unido de Gran Bretaña e Irlanda del Norte"
        },
        region: 'Northern Europe',
        population: 67215293,
        google_maps_link: 'https://goo.gl/maps/FoDtc3UKMkFsXAjHA',
        flag: 'https://flagcdn.com/w320/gb.png',
        currencies: [
        {
            'name': 'British pound',
            'symbol': '£'
        }]
    },
    {
        code: 'GEO',
        name:
        {
            fr: "Géorgie",
            en: "Georgia",
            it: "Georgia",
            es: "Georgia"
        },
        capital:
        {
            fr: "Tbilissi",
            en: "Tbilisi",
            it: "Tbilisi",
            es: "Tiflis"
        },
        official_name:
        {
            fr: "Géorgie",
            en: "Georgia",
            it: "Georgia",
            es: "Georgia"
        },
        region: 'Western Asia',
        population: 3714000,
        google_maps_link: 'https://goo.gl/maps/bvCaGBePR1ZEDK5cA',
        flag: 'https://flagcdn.com/w320/ge.png',
        currencies: [
        {
            'name': 'lari',
            'symbol': '₾'
        }]
    },
    {
        code: 'GGY',
        name:
        {
            fr: "Guernesey",
            en: "Guernsey",
            it: "Guernsey",
            es: "Guernsey"
        },
        capital:
        {
            fr: "Saint-Pierre-Port",
            en: "St. Peter Port",
            it: "Saint Peter Port",
            es: "Saint Peter Port"
        },
        official_name:
        {
            fr: "Bailliage de Guernesey",
            en: "Bailiwick of Guernsey",
            it: "Bailiato di Guernsey",
            es: "Bailía de Guernsey"
        },
        region: 'Northern Europe',
        population: 62999,
        google_maps_link: 'https://goo.gl/maps/6kXnQU5QvEZMD9VB7',
        flag: 'https://flagcdn.com/w320/gg.png',
        currencies: [
        {
            'name': 'British pound',
            'symbol': '£'
        },
        {
            'name': 'Guernsey pound',
            'symbol': '£'
        }]
    },
    {
        code: 'GHA',
        name:
        {
            fr: "Ghana",
            en: "Ghana",
            it: "Ghana",
            es: "Ghana"
        },
        capital:
        {
            fr: "Accra",
            en: "Accra",
            it: "Accra",
            es: "Acra"
        },
        official_name:
        {
            fr: "République du Ghana",
            en: "Republic of Ghana",
            it: "Repubblica del Ghana",
            es: "República de Ghana"
        },
        region: 'Western Africa',
        population: 31072945,
        google_maps_link: 'https://goo.gl/maps/Avy5RSmdsXFBaiXq8',
        flag: 'https://flagcdn.com/w320/gh.png',
        currencies: [
        {
            'name': 'Ghanaian cedi',
            'symbol': '₵'
        }]
    },
    {
        code: 'GIB',
        name:
        {
            fr: "Gibraltar",
            en: "Gibraltar",
            it: "Gibilterra",
            es: "Gibraltar"
        },
        capital:
        {
            fr: "Gibraltar",
            en: "Gibraltar",
            it: "Gibilterra",
            es: "Gibraltar"
        },
        official_name:
        {
            fr: "Gibraltar",
            en: "Gibraltar",
            it: "Gibilterra",
            es: "Gibraltar"
        },
        region: 'Southern Europe',
        population: 33691,
        google_maps_link: 'https://goo.gl/maps/CEoHAs1t6byCBhHFA',
        flag: 'https://flagcdn.com/w320/gi.png',
        currencies: [
        {
            'name': 'Gibraltar pound',
            'symbol': '£'
        }]
    },
    {
        code: 'GIN',
        name:
        {
            fr: "Guinée",
            en: "Guinea",
            it: "Guinea",
            es: "Guinea"
        },
        capital:
        {
            fr: "Conakry",
            en: "Conakry",
            it: "Conakry",
            es: "Conakri"
        },
        official_name:
        {
            fr: "République de Guinée",
            en: "Republic of Guinea",
            it: "Repubblica di Guinea",
            es: "República de Guinea"
        },
        region: 'Western Africa',
        population: 13132792,
        google_maps_link: 'https://goo.gl/maps/8J5oM5sA4Ayr1ZYGA',
        flag: 'https://flagcdn.com/w320/gn.png',
        currencies: [
        {
            'name': 'Guinean franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'GLP',
        name:
        {
            fr: "Guadeloupe",
            en: "Guadeloupe",
            it: "Guadalupa",
            es: "Guadalupe"
        },
        capital:
        {
            fr: "Basse-Terre",
            en: "Basse-Terre",
            it: "Basse-Terre",
            es: "Basse-Terre"
        },
        official_name:
        {
            fr: "Guadeloupe",
            en: "Guadeloupe",
            it: "Guadalupa",
            es: "Guadalupe"
        },
        region: 'Caribbean',
        population: 400132,
        google_maps_link: 'https://goo.gl/maps/Dy9R2EufJtoWm8UN9',
        flag: 'https://flagcdn.com/w320/gp.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'GMB',
        name:
        {
            fr: "Gambie",
            en: "Gambia",
            it: "Gambia",
            es: "Gambia"
        },
        capital:
        {
            fr: "Banjul",
            en: "Banjul",
            it: "Banjul",
            es: "Banjul"
        },
        official_name:
        {
            fr: "République de Gambie",
            en: "Republic of the Gambia",
            it: "Repubblica del Gambia",
            es: "República de Gambia"
        },
        region: 'Western Africa',
        population: 2416664,
        google_maps_link: 'https://goo.gl/maps/bbGBCxxtfD2A9Z4m6',
        flag: 'https://flagcdn.com/w320/gm.png',
        currencies: [
        {
            'name': 'dalasi',
            'symbol': 'D'
        }]
    },
    {
        code: 'GNB',
        name:
        {
            fr: "Guinée-Bissau",
            en: "Guinea-Bissau",
            it: "Guinea-Bissau",
            es: "Guinea-Bisáu"
        },
        capital:
        {
            fr: "Bissau",
            en: "Bissau",
            it: "Bissau",
            es: "Bissau"
        },
        official_name:
        {
            fr: "République de Guinée-Bissau",
            en: "Republic of Guinea-Bissau",
            it: "Repubblica di Guinea-Bissau",
            es: "República de Guinea-Bisáu"
        },
        region: 'Western Africa',
        population: 1967998,
        google_maps_link: 'https://goo.gl/maps/5Wyaz17miUc1zLc67',
        flag: 'https://flagcdn.com/w320/gw.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'GNQ',
        name:
        {
            fr: "Guinée équatoriale",
            en: "Equatorial Guinea",
            it: "Guinea Equatoriale",
            es: "Guinea Ecuatorial"
        },
        capital:
        {
            fr: "Malabo",
            en: "Malabo",
            it: "Malabo",
            es: "Malabo"
        },
        official_name:
        {
            fr: "République de Guinée équatoriale",
            en: "Republic of Equatorial Guinea",
            it: "Repubblica della Guinea Equatoriale",
            es: "República de Guinea Ecuatorial"
        },
        region: 'Middle Africa',
        population: 1402985,
        google_maps_link: 'https://goo.gl/maps/ucWfFd8aW1FbGMva9',
        flag: 'https://flagcdn.com/w320/gq.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'GRC',
        name:
        {
            fr: "Grèce",
            en: "Greece",
            it: "Grecia",
            es: "Grecia"
        },
        capital:
        {
            fr: "Athènes",
            en: "Athens",
            it: "Atene",
            es: "Atenas"
        },
        official_name:
        {
            fr: "République hellénique",
            en: "Hellenic Republic",
            it: "Repubblica Ellenica",
            es: "República Helénica"
        },
        region: 'Southern Europe',
        population: 10715549,
        google_maps_link: 'https://goo.gl/maps/LHGcAvuRyD2iKECC6',
        flag: 'https://flagcdn.com/w320/gr.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'GRD',
        name:
        {
            fr: "Grenade",
            en: "Grenada",
            it: "Grenada",
            es: "Granada"
        },
        capital:
        {
            fr: "Saint-Georges",
            en: "St. George's",
            it: "Saint George's",
            es: "Saint George"
        },
        official_name:
        {
            fr: "Grenade",
            en: "Grenada",
            it: "Grenada",
            es: "Granada"
        },
        region: 'Caribbean',
        population: 112519,
        google_maps_link: 'https://goo.gl/maps/rqWyfUAt4xhvk1Zy9',
        flag: 'https://flagcdn.com/w320/gd.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'GRL',
        name:
        {
            fr: "Groenland",
            en: "Greenland",
            it: "Groenlandia",
            es: "Groenlandia"
        },
        capital:
        {
            fr: "Nuuk",
            en: "Nuuk",
            it: "Nuuk",
            es: "Nuuk"
        },
        official_name:
        {
            fr: "Groenland",
            en: "Greenland",
            it: "Groenlandia",
            es: "Groenlandia"
        },
        region: 'North America',
        population: 56367,
        google_maps_link: 'https://goo.gl/maps/j3289UPEQXt1ceSy8',
        flag: 'https://flagcdn.com/w320/gl.png',
        currencies: [
        {
            'name': 'krone',
            'symbol': 'kr.'
        }]
    },
    {
        code: 'GTM',
        name:
        {
            fr: "Guatemala",
            en: "Guatemala",
            it: "Guatemala",
            es: "Guatemala"
        },
        capital:
        {
            fr: "Guatemala",
            en: "Guatemala City",
            it: "Città del Guatemala",
            es: "Ciudad de Guatemala"
        },
        official_name:
        {
            fr: "République du Guatemala",
            en: "Republic of Guatemala",
            it: "Repubblica del Guatemala",
            es: "República de Guatemala"
        },
        region: 'Central America',
        population: 16858333,
        google_maps_link: 'https://goo.gl/maps/JoRAbem4Hxb9FYbVA',
        flag: 'https://flagcdn.com/w320/gt.png',
        currencies: [
        {
            'name': 'Guatemalan quetzal',
            'symbol': 'Q'
        }]
    },
    {
        code: 'GUF',
        name:
        {
            fr: "Guyane française",
            en: "French Guiana",
            it: "Guyana Francese",
            es: "Guayana Francesa"
        },
        capital:
        {
            fr: "Cayenne",
            en: "Cayenne",
            it: "Cayenna",
            es: "Cayena"
        },
        official_name:
        {
            fr: "Guyane française",
            en: "Guiana",
            it: "Guyana Francese",
            es: "Departamento de Guayana Francesa"
        },
        region: 'South America',
        population: 254541,
        google_maps_link: 'https://goo.gl/maps/NJawFwMzG7YtCrVP7',
        flag: 'https://flagcdn.com/w320/gf.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'GUM',
        name:
        {
            fr: "Guam",
            en: "Guam",
            it: "Guam",
            es: "Guam"
        },
        capital:
        {
            fr: "Hagåtña",
            en: "Hagåtña",
            it: "Agana",
            es: "Hagåtña"
        },
        official_name:
        {
            fr: "Guam",
            en: "Guam",
            it: "Guam",
            es: "Guam"
        },
        region: 'Micronesia',
        population: 168783,
        google_maps_link: 'https://goo.gl/maps/Xfnq2i279b18cH3C9',
        flag: 'https://flagcdn.com/w320/gu.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'GUY',
        name:
        {
            fr: "Guyana",
            en: "Guyana",
            it: "Guyana",
            es: "Guyana"
        },
        capital:
        {
            fr: "Georgetown",
            en: "Georgetown",
            it: "Georgetown",
            es: "Georgetown"
        },
        official_name:
        {
            fr: "Coopérative de Guyana",
            en: "Co-operative Republic of Guyana",
            it: "Cooperative Republic of Guyana",
            es: "República Cooperativa de Guyana"
        },
        region: 'South America',
        population: 786559,
        google_maps_link: 'https://goo.gl/maps/DFsme2xEeugUAsCx5',
        flag: 'https://flagcdn.com/w320/gy.png',
        currencies: [
        {
            'name': 'Guyanese dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'HKG',
        name:
        {
            fr: "Région administrative spéciale de Hong Kong",
            en: "Hong Kong",
            it: "Hong Kong",
            es: "Hong Kong"
        },
        capital:
        {
            fr: "Hong Kong",
            en: "City of Victoria",
            it: "Hong Kong",
            es: "Hong Kong"
        },
        official_name:
        {
            fr: "Région administrative spéciale de Hong Kong de la République populaire de Chine",
            en: "Hong Kong Special Administrative Region of the People's Republic of China",
            it: "Regione Amministrativa Speciale di Hong Kong",
            es: "Región Administrativa Especial de Hong Kong de la República Popular China"
        },
        region: 'Eastern Asia',
        population: 7500700,
        google_maps_link: 'https://goo.gl/maps/1sEnNmT47ffrC8MU8',
        flag: 'https://flagcdn.com/w320/hk.png',
        currencies: [
        {
            'name': 'Hong Kong dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'HND',
        name:
        {
            fr: "Honduras",
            en: "Honduras",
            it: "Honduras",
            es: "Honduras"
        },
        capital:
        {
            fr: "Tegucigalpa",
            en: "Tegucigalpa",
            it: "Tegucigalpa",
            es: "Tegucigalpa"
        },
        official_name:
        {
            fr: "République du Honduras",
            en: "Republic of Honduras",
            it: "Repubblica di Honduras",
            es: "República de Honduras"
        },
        region: 'Central America',
        population: 9904608,
        google_maps_link: 'https://goo.gl/maps/BbeJK8Sk2VkMHbdF8',
        flag: 'https://flagcdn.com/w320/hn.png',
        currencies: [
        {
            'name': 'Honduran lempira',
            'symbol': 'L'
        }]
    },
    {
        code: 'HRV',
        name:
        {
            fr: "Croatie",
            en: "Croatia",
            it: "Croazia",
            es: "Croacia"
        },
        capital:
        {
            fr: "Zagreb",
            en: "Zagreb",
            it: "Zagabria",
            es: "Zagreb"
        },
        official_name:
        {
            fr: "République de Croatie",
            en: "Republic of Croatia",
            it: "Repubblica di Croazia",
            es: "República de Croacia"
        },
        region: 'Southeast Europe',
        population: 4047200,
        google_maps_link: 'https://goo.gl/maps/qSG6xTKUmrYpwmGQ6',
        flag: 'https://flagcdn.com/w320/hr.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'HTI',
        name:
        {
            fr: "Haïti",
            en: "Haiti",
            it: "Haiti",
            es: "Haití"
        },
        capital:
        {
            fr: "Port-au-Prince",
            en: "Port-au-Prince",
            it: "Port-au-Prince",
            es: "Puerto Príncipe"
        },
        official_name:
        {
            fr: "République d'Haïti",
            en: "Republic of Haiti",
            it: "Repubblica di Haiti",
            es: "República de Haití"
        },
        region: 'Caribbean',
        population: 11402533,
        google_maps_link: 'https://goo.gl/maps/9o13xtjuUdqFnHbn9',
        flag: 'https://flagcdn.com/w320/ht.png',
        currencies: [
        {
            'name': 'Haitian gourde',
            'symbol': 'G'
        }]
    },
    {
        code: 'HUN',
        name:
        {
            fr: "Hongrie",
            en: "Hungary",
            it: "Ungheria",
            es: "Hungría"
        },
        capital:
        {
            fr: "Budapest",
            en: "Budapest",
            it: "Budapest",
            es: "Budapest"
        },
        official_name:
        {
            fr: "Hongrie",
            en: "Hungary",
            it: "Ungheria",
            es: "Hungría"
        },
        region: 'Central Europe',
        population: 9749763,
        google_maps_link: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
        flag: 'https://flagcdn.com/w320/hu.png',
        currencies: [
        {
            'name': 'Hungarian forint',
            'symbol': 'Ft'
        }]
    },
    {
        code: 'IDN',
        name:
        {
            fr: "Indonésie",
            en: "Indonesia",
            it: "Indonesia",
            es: "Indonesia"
        },
        capital:
        {
            fr: "Jakarta",
            en: "Jakarta",
            it: "Giacarta",
            es: "Yakarta"
        },
        official_name:
        {
            fr: "République d'Indonésie",
            en: "Republic of Indonesia",
            it: "Repubblica di Indonesia",
            es: "República de Indonesia"
        },
        region: 'South-Eastern Asia',
        population: 273523621,
        google_maps_link: 'https://goo.gl/maps/9gfPupm5bffixiFJ6',
        flag: 'https://flagcdn.com/w320/id.png',
        currencies: [
        {
            'name': 'Indonesian rupiah',
            'symbol': 'Rp'
        }]
    },
    {
        code: 'IMN',
        name:
        {
            fr: "Île de Man",
            en: "Isle of Man",
            it: "Isola di Man",
            es: "Isla de Man"
        },
        capital:
        {
            fr: "Douglas",
            en: "Douglas",
            it: "Douglas",
            es: "Douglas"
        },
        official_name:
        {
            fr: "Île de Man",
            en: "Isle of Man",
            it: "Isola di Man",
            es: "Isla de Man"
        },
        region: 'Northern Europe',
        population: 85032,
        google_maps_link: 'https://goo.gl/maps/4DqVHDgVaFgnh8ZV8',
        flag: 'https://flagcdn.com/w320/im.png',
        currencies: [
        {
            'name': 'British pound',
            'symbol': '£'
        },
        {
            'name': 'Manx pound',
            'symbol': '£'
        }]
    },
    {
        code: 'IND',
        name:
        {
            fr: "Inde",
            en: "India",
            it: "India",
            es: "India"
        },
        capital:
        {
            fr: "New Delhi",
            en: "New Delhi",
            it: "Nuova Delhi",
            es: "Nueva Delhi"
        },
        official_name:
        {
            fr: "République de l'Inde",
            en: "Republic of India",
            it: "Repubblica dell'India",
            es: "República de India"
        },
        region: 'Southern Asia',
        population: 1380004385,
        google_maps_link: 'https://goo.gl/maps/WSk3fLwG4vtPQetp7',
        flag: 'https://flagcdn.com/w320/in.png',
        currencies: [
        {
            'name': 'Indian rupee',
            'symbol': '₹'
        }]
    },
    {
        code: 'IOT',
        name:
        {
            fr: "Territoire britannique de l'océan Indien",
            en: "British Indian Ocean Territory",
            it: "Territorio britannico dell'oceano Indiano",
            es: "Territorio Británico del Océano Índico"
        },
        capital:
        {
            fr: "Diego Garcia",
            en: "Diego Garcia",
            it: "Diego Garcia",
            es: "Diego García"
        },
        official_name:
        {
            fr: "Territoire britannique de l'océan Indien",
            en: "British Indian Ocean Territory",
            it: "Territorio britannico dell'oceano Indiano",
            es: "Territorio Británico del Océano Índico"
        },
        region: 'Eastern Africa',
        population: 3000,
        google_maps_link: 'https://goo.gl/maps/bheNucgekVEYozoi6',
        flag: 'https://flagcdn.com/w320/io.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'IRL',
        name:
        {
            fr: "Irlande",
            en: "Ireland",
            it: "Irlanda",
            es: "Irlanda"
        },
        capital:
        {
            fr: "Dublin",
            en: "Dublin",
            it: "Dublino",
            es: "Dublín"
        },
        official_name:
        {
            fr: "République d'Irlande",
            en: "Republic of Ireland",
            it: "Irlanda",
            es: "República de Irlanda"
        },
        region: 'Northern Europe',
        population: 4994724,
        google_maps_link: 'https://goo.gl/maps/hxd1BKxgpchStzQC6',
        flag: 'https://flagcdn.com/w320/ie.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'IRN',
        name:
        {
            fr: "Iran",
            en: "Iran",
            it: "Iran",
            es: "Irán"
        },
        capital:
        {
            fr: "Téhéran",
            en: "Tehran",
            it: "Teheran",
            es: "Teherán"
        },
        official_name:
        {
            fr: "République islamique d'Iran",
            en: "Islamic Republic of Iran",
            it: "Repubblica Islamica dell'Iran",
            es: "República Islámica de Irán"
        },
        region: 'Southern Asia',
        population: 83992953,
        google_maps_link: 'https://goo.gl/maps/dMgEGuacBPGYQnjY7',
        flag: 'https://flagcdn.com/w320/ir.png',
        currencies: [
        {
            'name': 'Iranian rial',
            'symbol': '﷼'
        }]
    },
    {
        code: 'IRQ',
        name:
        {
            fr: "Iraq",
            en: "Iraq",
            it: "Iraq",
            es: "Irak"
        },
        capital:
        {
            fr: "Bagdad",
            en: "Baghdad",
            it: "Baghdad",
            es: "Bagdad"
        },
        official_name:
        {
            fr: "République d'Iraq",
            en: "Republic of Iraq",
            it: "Repubblica dell'Iraq",
            es: "República de Irak"
        },
        region: 'Western Asia',
        population: 40222503,
        google_maps_link: 'https://goo.gl/maps/iL8Bmy1sUCW9fUk18',
        flag: 'https://flagcdn.com/w320/iq.png',
        currencies: [
        {
            'name': 'Iraqi dinar',
            'symbol': 'ع.د'
        }]
    },
    {
        code: 'ISL',
        name:
        {
            fr: "Islande",
            en: "Iceland",
            it: "Islanda",
            es: "Islandia"
        },
        capital:
        {
            fr: "Reykjavik",
            en: "Reykjavik",
            it: "Reykjavik",
            es: "Reikiavik"
        },
        official_name:
        {
            fr: "République d'Islande",
            en: "Iceland",
            it: "Repubblica d'Islanda",
            es: "Islandia"
        },
        region: 'Northern Europe',
        population: 366425,
        google_maps_link: 'https://goo.gl/maps/WxFWSQuc3oamNxoE6',
        flag: 'https://flagcdn.com/w320/is.png',
        currencies: [
        {
            'name': 'Icelandic króna',
            'symbol': 'kr'
        }]
    },
    {
        code: 'ISR',
        name:
        {
            fr: "Israël",
            en: "Israel",
            it: "Israele",
            es: "Israel"
        },
        capital:
        {
            fr: "Jérusalem",
            en: "Jerusalem",
            it: "Gerusalemme Est",
            es: "Jerusalén"
        },
        official_name:
        {
            fr: "État d'Israël",
            en: "State of Israel",
            it: "Stato di Israele",
            es: "Estado de Israel"
        },
        region: 'Western Asia',
        population: 9216900,
        google_maps_link: 'https://goo.gl/maps/6UY1AH8XeafVwdC97',
        flag: 'https://flagcdn.com/w320/il.png',
        currencies: [
        {
            'name': 'Israeli new shekel',
            'symbol': '₪'
        }]
    },
    {
        code: 'ITA',
        name:
        {
            fr: "Italie",
            en: "Italy",
            it: "Italia",
            es: "Italia"
        },
        capital:
        {
            fr: "Rome",
            en: "Rome",
            it: "Roma",
            es: "Roma"
        },
        official_name:
        {
            fr: "République italienne",
            en: "Italian Republic",
            it: "Repubblica Italiana",
            es: "República Italiana"
        },
        region: 'Southern Europe',
        population: 59554023,
        google_maps_link: 'https://goo.gl/maps/8M1K27TDj7StTRTq8',
        flag: 'https://flagcdn.com/w320/it.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'JAM',
        name:
        {
            fr: "Jamaïque",
            en: "Jamaica",
            it: "Giamaica",
            es: "Jamaica"
        },
        capital:
        {
            fr: "Kingston",
            en: "Kingston",
            it: "Kingston",
            es: "Kingston"
        },
        official_name:
        {
            fr: "Jamaïque",
            en: "Jamaica",
            it: "Giamaica",
            es: "Jamaica"
        },
        region: 'Caribbean',
        population: 2961161,
        google_maps_link: 'https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A',
        flag: 'https://flagcdn.com/w320/jm.png',
        currencies: [
        {
            'name': 'Jamaican dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'JEY',
        name:
        {
            fr: "Jersey",
            en: "Jersey",
            it: "Jersey",
            es: "Jersey"
        },
        capital:
        {
            fr: "Saint-Hélier",
            en: "Saint Helier",
            it: "Saint Helier",
            es: "Saint Helier"
        },
        official_name:
        {
            fr: "Bailliage de Jersey",
            en: "Bailiwick of Jersey",
            it: "Bailiato di Jersey",
            es: "Bailía de Jersey"
        },
        region: 'Northern Europe',
        population: 100800,
        google_maps_link: 'https://goo.gl/maps/rXG8GZZtsqK92kTCA',
        flag: 'https://flagcdn.com/w320/je.png',
        currencies: [
        {
            'name': 'British pound',
            'symbol': '£'
        },
        {
            'name': 'Jersey pound',
            'symbol': '£'
        }]
    },
    {
        code: 'JOR',
        name:
        {
            fr: "Jordanie",
            en: "Jordan",
            it: "Giordania",
            es: "Jordania"
        },
        capital:
        {
            fr: "Amman",
            en: "Amman",
            it: "Amman",
            es: "Amán"
        },
        official_name:
        {
            fr: "Royaume hachémite de Jordanie",
            en: "Hashemite Kingdom of Jordan",
            it: "Regno Hashemita di Giordania",
            es: "Reino Hachemita de Jordania"
        },
        region: 'Western Asia',
        population: 10203140,
        google_maps_link: 'https://goo.gl/maps/ko1dzSDKg8Gsi9A98',
        flag: 'https://flagcdn.com/w320/jo.png',
        currencies: [
        {
            'name': 'Jordanian dinar',
            'symbol': 'د.ا'
        }]
    },
    {
        code: 'JPN',
        name:
        {
            fr: "Japon",
            en: "Japan",
            it: "Giappone",
            es: "Japón"
        },
        capital:
        {
            fr: "Tokyo",
            en: "Tokyo",
            it: "Tokyo",
            es: "Tokio"
        },
        official_name:
        {
            fr: "Japon",
            en: "Japan",
            it: "Giappone",
            es: "Japón"
        },
        region: 'Eastern Asia',
        population: 125836021,
        google_maps_link: 'https://goo.gl/maps/NGTLSCSrA8bMrvnX9',
        flag: 'https://flagcdn.com/w320/jp.png',
        currencies: [
        {
            'name': 'Japanese yen',
            'symbol': '¥'
        }]
    },
    {
        code: 'KAZ',
        name:
        {
            fr: "Kazakhstan",
            en: "Kazakhstan",
            it: "Kazakistan",
            es: "Kazajistán"
        },
        capital:
        {
            fr: "Noursoultan",
            en: "Nur-Sultan",
            it: "Nursultan",
            es: "Nur-Sultán"
        },
        official_name:
        {
            fr: "République du Kazakhstan",
            en: "Republic of Kazakhstan",
            it: "Repubblica del Kazakistan",
            es: "República de Kazajistán"
        },
        region: 'Central Asia',
        population: 18754440,
        google_maps_link: 'https://goo.gl/maps/8VohJGu7ShuzZYyeA',
        flag: 'https://flagcdn.com/w320/kz.png',
        currencies: [
        {
            'name': 'Kazakhstani tenge',
            'symbol': '₸'
        }]
    },
    {
        code: 'KEN',
        name:
        {
            fr: "Kenya",
            en: "Kenya",
            it: "Kenya",
            es: "Kenia"
        },
        capital:
        {
            fr: "Nairobi",
            en: "Nairobi",
            it: "Nairobi",
            es: "Nairobi"
        },
        official_name:
        {
            fr: "République du Kenya",
            en: "Republic of Kenya",
            it: "Repubblica del Kenya",
            es: "República de Kenia"
        },
        region: 'Eastern Africa',
        population: 53771300,
        google_maps_link: 'https://goo.gl/maps/Ni9M7wcCxf8bJHLX8',
        flag: 'https://flagcdn.com/w320/ke.png',
        currencies: [
        {
            'name': 'Kenyan shilling',
            'symbol': 'Sh'
        }]
    },
    {
        code: 'KGZ',
        name:
        {
            fr: "Kirghizistan",
            en: "Kyrgyzstan",
            it: "Kirghizistan",
            es: "Kirguistán"
        },
        capital:
        {
            fr: "Bichkek",
            en: "Bishkek",
            it: "Bishkek",
            es: "Biskek"
        },
        official_name:
        {
            fr: "République kirghize",
            en: "Kyrgyz Republic",
            it: "Repubblica Kirghiza",
            es: "República Kirguisa"
        },
        region: 'Central Asia',
        population: 6591600,
        google_maps_link: 'https://goo.gl/maps/SKG8BSMMQVvxkRkB7',
        flag: 'https://flagcdn.com/w320/kg.png',
        currencies: [
        {
            'name': 'Kyrgyzstani som',
            'symbol': 'с'
        }]
    },
    {
        code: 'KHM',
        name:
        {
            fr: "Cambodge",
            en: "Cambodia",
            it: "Cambogia",
            es: "Camboya"
        },
        capital:
        {
            fr: "Phnom Penh",
            en: "Phnom Penh",
            it: "Phnom Penh",
            es: "Nom Pen"
        },
        official_name:
        {
            fr: "Royaume du Cambodge",
            en: "Kingdom of Cambodia",
            it: "Regno di Cambogia",
            es: "Reino de Camboya"
        },
        region: 'South-Eastern Asia',
        population: 16718971,
        google_maps_link: 'https://goo.gl/maps/nztQtFSrUXZymJaW8',
        flag: 'https://flagcdn.com/w320/kh.png',
        currencies: [
        {
            'name': 'Cambodian riel',
            'symbol': '៛'
        },
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'KIR',
        name:
        {
            fr: "Kiribati",
            en: "Kiribati",
            it: "Kiribati",
            es: "Kiribati"
        },
        capital:
        {
            fr: "Tarawa",
            en: "South Tarawa",
            it: "Tarawa",
            es: "Tarawa"
        },
        official_name:
        {
            fr: "République de Kiribati",
            en: "Independent and Sovereign Republic of Kiribati",
            it: "Repubblica di Kiribati",
            es: "República de Kiribati"
        },
        region: 'Micronesia',
        population: 119446,
        google_maps_link: 'https://goo.gl/maps/NBfYvrndW4skAimw9',
        flag: 'https://flagcdn.com/w320/ki.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        },
        {
            'name': 'Kiribati dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'KNA',
        name:
        {
            fr: "Saint-Kitts-et-Nevis",
            en: "Saint Kitts and Nevis",
            it: "Saint Kitts e Nevis",
            es: "San Cristóbal y Nieves"
        },
        capital:
        {
            fr: "Basseterre",
            en: "Basseterre",
            it: "Basseterre",
            es: "Basseterre"
        },
        official_name:
        {
            fr: "Fédération de Saint-Christophe-et-Niévès",
            en: "Federation of Saint Christopher and Nevis",
            it: "Saint Kitts e Nevis",
            es: "Federación de San Cristóbal y Nieves"
        },
        region: 'Caribbean',
        population: 53192,
        google_maps_link: 'https://goo.gl/maps/qiaVwcLVTXX3eoTNA',
        flag: 'https://flagcdn.com/w320/kn.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'KOR',
        name:
        {
            fr: "Corée du Sud",
            en: "South Korea",
            it: "Corea del Sud",
            es: "Corea del Sur"
        },
        capital:
        {
            fr: "Séoul",
            en: "Seoul",
            it: "Seul",
            es: "Seúl"
        },
        official_name:
        {
            fr: "République de Corée",
            en: "Republic of Korea",
            it: "Repubblica di Corea",
            es: "República de Corea"
        },
        region: 'Eastern Asia',
        population: 51780579,
        google_maps_link: 'https://goo.gl/maps/7ecjaJXefjAQhxjGA',
        flag: 'https://flagcdn.com/w320/kr.png',
        currencies: [
        {
            'name': 'South Korean won',
            'symbol': '₩'
        }]
    },
    {
        code: 'KWT',
        name:
        {
            fr: "Koweït",
            en: "Kuwait",
            it: "Kuwait",
            es: "Kuwait"
        },
        capital:
        {
            fr: "Koweït",
            en: "Kuwait City",
            it: "Kuwait",
            es: "Kuwait"
        },
        official_name:
        {
            fr: "État du Koweït",
            en: "State of Kuwait",
            it: "Stato del Kuwait",
            es: "Estado de Kuwait"
        },
        region: 'Western Asia',
        population: 4270563,
        google_maps_link: 'https://goo.gl/maps/aqr3aNQjS1BAvksJ7',
        flag: 'https://flagcdn.com/w320/kw.png',
        currencies: [
        {
            'name': 'Kuwaiti dinar',
            'symbol': 'د.ك'
        }]
    },
    {
        code: 'LAO',
        name:
        {
            fr: "Laos",
            en: "Laos",
            it: "Laos",
            es: "Laos"
        },
        capital:
        {
            fr: "Vientiane",
            en: "Vientiane",
            it: "Vientiane",
            es: "Vientián"
        },
        official_name:
        {
            fr: "République démocratique populaire lao",
            en: "Lao People's Democratic Republic",
            it: "Repubblica Democratica Popolare del Laos",
            es: "República Democrática Popular Lao"
        },
        region: 'South-Eastern Asia',
        population: 7275556,
        google_maps_link: 'https://goo.gl/maps/F3asVB7sRKgSnwbE7',
        flag: 'https://flagcdn.com/w320/la.png',
        currencies: [
        {
            'name': 'Lao kip',
            'symbol': '₭'
        }]
    },
    {
        code: 'LBN',
        name:
        {
            fr: "Liban",
            en: "Lebanon",
            it: "Libano",
            es: "Líbano"
        },
        capital:
        {
            fr: "Beyrouth",
            en: "Beirut",
            it: "Beirut",
            es: "Beirut"
        },
        official_name:
        {
            fr: "République libanaise",
            en: "Lebanese Republic",
            it: "Repubblica del Libano",
            es: "República Libanesa"
        },
        region: 'Western Asia',
        population: 6825442,
        google_maps_link: 'https://goo.gl/maps/Sz5VCU8UFBqMyTdc9',
        flag: 'https://flagcdn.com/w320/lb.png',
        currencies: [
        {
            'name': 'Lebanese pound',
            'symbol': 'ل.ل'
        }]
    },
    {
        code: 'LBR',
        name:
        {
            fr: "Libéria",
            en: "Liberia",
            it: "Liberia",
            es: "Liberia"
        },
        capital:
        {
            fr: "Monrovia",
            en: "Monrovia",
            it: "Monrovia",
            es: "Monrovia"
        },
        official_name:
        {
            fr: "République du Libéria",
            en: "Republic of Liberia",
            it: "Repubblica di Liberia",
            es: "República de Liberia"
        },
        region: 'Western Africa',
        population: 5057677,
        google_maps_link: 'https://goo.gl/maps/4VsHsc2oeGeRL3wg6',
        flag: 'https://flagcdn.com/w320/lr.png',
        currencies: [
        {
            'name': 'Liberian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'LBY',
        name:
        {
            fr: "Libye",
            en: "Libya",
            it: "Libia",
            es: "Libia"
        },
        capital:
        {
            fr: "Tripoli",
            en: "Tripoli",
            it: "Tripoli",
            es: "Trípoli"
        },
        official_name:
        {
            fr: "État de Libye",
            en: "State of Libya",
            it: "Stato di Libia",
            es: "Estado de Libia"
        },
        region: 'Northern Africa',
        population: 6871287,
        google_maps_link: 'https://goo.gl/maps/eLgGnaQWcJEdYRMy5',
        flag: 'https://flagcdn.com/w320/ly.png',
        currencies: [
        {
            'name': 'Libyan dinar',
            'symbol': 'ل.د'
        }]
    },
    {
        code: 'LCA',
        name:
        {
            fr: "Sainte-Lucie",
            en: "Saint Lucia",
            it: "Santa Lucia",
            es: "Santa Lucía"
        },
        capital:
        {
            fr: "Castries",
            en: "Castries",
            it: "Castries",
            es: "Castries"
        },
        official_name:
        {
            fr: "Sainte-Lucie",
            en: "Saint Lucia",
            it: "Santa Lucia",
            es: "Santa Lucía"
        },
        region: 'Caribbean',
        population: 183629,
        google_maps_link: 'https://goo.gl/maps/4HhJ2jkPdSL9BPRcA',
        flag: 'https://flagcdn.com/w320/lc.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'LIE',
        name:
        {
            fr: "Liechtenstein",
            en: "Liechtenstein",
            it: "Liechtenstein",
            es: "Liechtenstein"
        },
        capital:
        {
            fr: "Vaduz",
            en: "Vaduz",
            it: "Vaduz",
            es: "Vaduz"
        },
        official_name:
        {
            fr: "Principauté de Liechtenstein",
            en: "Principality of Liechtenstein",
            it: "Principato del Liechtenstein",
            es: "Principado de Liechtenstein"
        },
        region: 'Western Europe',
        population: 38137,
        google_maps_link: 'https://goo.gl/maps/KNuHeiJzAPodwM7y6',
        flag: 'https://flagcdn.com/w320/li.png',
        currencies: [
        {
            'name': 'Swiss franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'LKA',
        name:
        {
            fr: "Sri Lanka",
            en: "Sri Lanka",
            it: "Sri Lanka",
            es: "Sri Lanka"
        },
        capital:
        {
            fr: "Colombo",
            en: "Sri Jayawardenepura Kotte",
            it: "Colombo",
            es: "Sri Jayawardenapura Kotte"
        },
        official_name:
        {
            fr: "République démocratique socialiste du Sri Lanka",
            en: "Democratic Socialist Republic of Sri Lanka",
            it: "Repubblica Democratica Socialista di Sri Lanka",
            es: "República Socialista Democrática de Sri Lanka"
        },
        region: 'Southern Asia',
        population: 21919000,
        google_maps_link: 'https://goo.gl/maps/VkPHoeFSfgzRQCDv8',
        flag: 'https://flagcdn.com/w320/lk.png',
        currencies: [
        {
            'name': 'Sri Lankan rupee',
            'symbol': 'Rs  රු'
        }]
    },
    {
        code: 'LSO',
        name:
        {
            fr: "Lesotho",
            en: "Lesotho",
            it: "Lesotho",
            es: "Lesoto"
        },
        capital:
        {
            fr: "Maseru",
            en: "Maseru",
            it: "Maseru",
            es: "Maseru"
        },
        official_name:
        {
            fr: "Royaume du Lesotho",
            en: "Kingdom of Lesotho",
            it: "Regno del Lesotho",
            es: "Reino de Lesoto"
        },
        region: 'Southern Africa',
        population: 2142252,
        google_maps_link: 'https://goo.gl/maps/H8gJi5mL4Cmd1SF28',
        flag: 'https://flagcdn.com/w320/ls.png',
        currencies: [
        {
            'name': 'Lesotho loti',
            'symbol': 'L'
        },
        {
            'name': 'South African rand',
            'symbol': 'R'
        }]
    },
    {
        code: 'LTU',
        name:
        {
            fr: "Lituanie",
            en: "Lithuania",
            it: "Lituania",
            es: "Lituania"
        },
        capital:
        {
            fr: "Vilnius",
            en: "Vilnius",
            it: "Vilnius",
            es: "Vilna"
        },
        official_name:
        {
            fr: "République de Lituanie",
            en: "Republic of Lithuania",
            it: "Repubblica di Lituania",
            es: "República de Lituania"
        },
        region: 'Northern Europe',
        population: 2794700,
        google_maps_link: 'https://goo.gl/maps/dd1s9rrLjrK2G8yY6',
        flag: 'https://flagcdn.com/w320/lt.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'LUX',
        name:
        {
            fr: "Luxembourg",
            en: "Luxembourg",
            it: "Lussemburgo",
            es: "Luxemburgo"
        },
        capital:
        {
            fr: "Luxembourg",
            en: "Luxembourg",
            it: "Lussemburgo",
            es: "Luxemburgo"
        },
        official_name:
        {
            fr: "Grand-Duché de Luxembourg",
            en: "Grand Duchy of Luxembourg",
            it: "Granducato di Lussemburgo",
            es: "Gran Ducado de Luxemburgo"
        },
        region: 'Western Europe',
        population: 632275,
        google_maps_link: 'https://goo.gl/maps/L6b2AgndgHprt2Ko9',
        flag: 'https://flagcdn.com/w320/lu.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'LVA',
        name:
        {
            fr: "Lettonie",
            en: "Latvia",
            it: "Lettonia",
            es: "Letonia"
        },
        capital:
        {
            fr: "Riga",
            en: "Riga",
            it: "Riga",
            es: "Riga"
        },
        official_name:
        {
            fr: "République de Lettonie",
            en: "Republic of Latvia",
            it: "Repubblica di Lettonia",
            es: "República de Letonia"
        },
        region: 'Northern Europe',
        population: 1901548,
        google_maps_link: 'https://goo.gl/maps/iQpUkH7ghq31ZtXe9',
        flag: 'https://flagcdn.com/w320/lv.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MAF',
        name:
        {
            fr: "Saint-Martin",
            en: "Saint Martin",
            it: "Saint Martin",
            es: "San Martín"
        },
        capital:
        {
            fr: "Marigot",
            en: "Marigot",
            it: "Marigot",
            es: "Marigot"
        },
        official_name:
        {
            fr: "Collectivité de Saint-Martin",
            en: "Saint Martin",
            it: "Collectivité de Saint-Martin",
            es: "Colectividad de San Martín"
        },
        region: 'Caribbean',
        population: 38659,
        google_maps_link: 'https://goo.gl/maps/P9ho9QuJ9EAR28JEA',
        flag: 'https://flagcdn.com/w320/mf.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MAR',
        name:
        {
            fr: "Maroc",
            en: "Morocco",
            it: "Marocco",
            es: "Marruecos"
        },
        capital:
        {
            fr: "Rabat",
            en: "Rabat",
            it: "Rabat",
            es: "Rabat"
        },
        official_name:
        {
            fr: "Royaume du Maroc",
            en: "Kingdom of Morocco",
            it: "Regno del Marocco",
            es: "Reino de Marruecos"
        },
        region: 'Northern Africa',
        population: 36910558,
        google_maps_link: 'https://goo.gl/maps/6oMv3dyBZg3iaXQ5A',
        flag: 'https://flagcdn.com/w320/ma.png',
        currencies: [
        {
            'name': 'Moroccan dirham',
            'symbol': 'د.م.'
        }]
    },
    {
        code: 'MCO',
        name:
        {
            fr: "Monaco",
            en: "Monaco",
            it: "Monaco",
            es: "Mónaco"
        },
        capital:
        {
            fr: "Monaco",
            en: "Monaco",
            it: "Monaco",
            es: "Mónaco"
        },
        official_name:
        {
            fr: "Principauté de Monaco",
            en: "Principality of Monaco",
            it: "Principato di Monaco",
            es: "Principado de Mónaco"
        },
        region: 'Western Europe',
        population: 39244,
        google_maps_link: 'https://goo.gl/maps/DGpndDot28bYdXYn7',
        flag: 'https://flagcdn.com/w320/mc.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MDA',
        name:
        {
            fr: "Moldavie",
            en: "Moldova",
            it: "Moldova",
            es: "Moldavia"
        },
        capital:
        {
            fr: "Chișinău",
            en: "Chișinău",
            it: "Chisinau",
            es: "Chisináu"
        },
        official_name:
        {
            fr: "République de Moldavie",
            en: "Republic of Moldova",
            it: "Repubblica di Moldova",
            es: "República de Moldavia"
        },
        region: 'Eastern Europe',
        population: 2617820,
        google_maps_link: 'https://goo.gl/maps/JjmyUuULujnDeFPf7',
        flag: 'https://flagcdn.com/w320/md.png',
        currencies: [
        {
            'name': 'Moldovan leu',
            'symbol': 'L'
        }]
    },
    {
        code: 'MDG',
        name:
        {
            fr: "Madagascar",
            en: "Madagascar",
            it: "Madagascar",
            es: "Madagascar"
        },
        capital:
        {
            fr: "Antananarivo",
            en: "Antananarivo",
            it: "Antananarivo",
            es: "Antananarivo"
        },
        official_name:
        {
            fr: "République de Madagascar",
            en: "Republic of Madagascar",
            it: "Repubblica del Madagascar",
            es: "República de Madagascar"
        },
        region: 'Eastern Africa',
        population: 27691019,
        google_maps_link: 'https://goo.gl/maps/AHQh2ABBaFW6Ngj26',
        flag: 'https://flagcdn.com/w320/mg.png',
        currencies: [
        {
            'name': 'Malagasy ariary',
            'symbol': 'Ar'
        }]
    },
    {
        code: 'MDV',
        name:
        {
            fr: "Maldives",
            en: "Maldives",
            it: "Maldive",
            es: "Maldivas"
        },
        capital:
        {
            fr: "Malé",
            en: "Malé",
            it: "Malé",
            es: "Malé"
        },
        official_name:
        {
            fr: "République des Maldives",
            en: "Republic of the Maldives",
            it: "Repubblica delle Maldive",
            es: "República de Maldivas"
        },
        region: 'Southern Asia',
        population: 540542,
        google_maps_link: 'https://goo.gl/maps/MNAWGq9vEdbZ9vUV7',
        flag: 'https://flagcdn.com/w320/mv.png',
        currencies: [
        {
            'name': 'Maldivian rufiyaa',
            'symbol': '.ރ'
        }]
    },
    {
        code: 'MEX',
        name:
        {
            fr: "Mexique",
            en: "Mexico",
            it: "Messico",
            es: "México"
        },
        capital:
        {
            fr: "Mexico",
            en: "Mexico City",
            it: "Città del Messico",
            es: "Ciudad de México"
        },
        official_name:
        {
            fr: "États-Unis mexicains",
            en: "United Mexican States",
            it: "Stati Uniti Messicani",
            es: "Estados Unidos Mexicanos"
        },
        region: 'North America',
        population: 128932753,
        google_maps_link: 'https://goo.gl/maps/s5g7imNPMDEePxzbA',
        flag: 'https://flagcdn.com/w320/mx.png',
        currencies: [
        {
            'name': 'Mexican peso',
            'symbol': '$'
        }]
    },
    {
        code: 'MHL',
        name:
        {
            fr: "Îles Marshall",
            en: "Marshall Islands",
            it: "Isole Marshall",
            es: "Islas Marshall"
        },
        capital:
        {
            fr: "Majuro",
            en: "Majuro",
            it: "Majuro",
            es: "Majuro"
        },
        official_name:
        {
            fr: "République des Îles Marshall",
            en: "Republic of the Marshall Islands",
            it: "Repubblica delle Isole Marshall",
            es: "República de las Islas Marshall"
        },
        region: 'Micronesia',
        population: 59194,
        google_maps_link: 'https://goo.gl/maps/A4xLi1XvcX88gi3W8',
        flag: 'https://flagcdn.com/w320/mh.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'MKD',
        name:
        {
            fr: "Macédoine du Nord",
            en: "North Macedonia",
            it: "Macedonia del Nord",
            es: "Macedonia del Norte"
        },
        capital:
        {
            fr: "Skopje",
            en: "Skopje",
            it: "Skopje",
            es: "Skopie"
        },
        official_name:
        {
            fr: "République de Macédoine du Nord",
            en: "Republic of North Macedonia",
            it: "Repubblica di Macedonia del Nord",
            es: "República de Macedonia del Norte"
        },
        region: 'Southeast Europe',
        population: 2077132,
        google_maps_link: 'https://goo.gl/maps/55Q8MEnF6ACdu3q79',
        flag: 'https://flagcdn.com/w320/mk.png',
        currencies: [
        {
            'name': 'denar',
            'symbol': 'den'
        }]
    },
    {
        code: 'MLI',
        name:
        {
            fr: "Mali",
            en: "Mali",
            it: "Mali",
            es: "Malí"
        },
        capital:
        {
            fr: "Bamako",
            en: "Bamako",
            it: "Bamako",
            es: "Bamako"
        },
        official_name:
        {
            fr: "République du Mali",
            en: "Republic of Mali",
            it: "Repubblica del Mali",
            es: "República de Malí"
        },
        region: 'Western Africa',
        population: 20250834,
        google_maps_link: 'https://goo.gl/maps/u9mYJkCB19wyuzh27',
        flag: 'https://flagcdn.com/w320/ml.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'MLT',
        name:
        {
            fr: "Malte",
            en: "Malta",
            it: "Malta",
            es: "Malta"
        },
        capital:
        {
            fr: "La Valette",
            en: "Valletta",
            it: "La Valletta",
            es: "La Valeta"
        },
        official_name:
        {
            fr: "République de Malte",
            en: "Republic of Malta",
            it: "Repubblica di Malta",
            es: "República de Malta"
        },
        region: 'Southern Europe',
        population: 525285,
        google_maps_link: 'https://goo.gl/maps/skXCqguxDxxEKVk47',
        flag: 'https://flagcdn.com/w320/mt.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MMR',
        name:
        {
            fr: "Myanmar",
            en: "Myanmar",
            it: "Myanmar",
            es: "Myanmar"
        },
        capital:
        {
            fr: "Naypyidaw",
            en: "Naypyidaw",
            it: "Naypyidaw",
            es: "Naipyidó"
        },
        official_name:
        {
            fr: "Union de Myanmar",
            en: "Republic of the Union of Myanmar",
            it: "Repubblica dell'Unione di Myanmar",
            es: "Unión de Myanmar"
        },
        region: 'South-Eastern Asia',
        population: 54409794,
        google_maps_link: 'https://goo.gl/maps/4jrZyJkDERUfHyp26',
        flag: 'https://flagcdn.com/w320/mm.png',
        currencies: [
        {
            'name': 'Burmese kyat',
            'symbol': 'Ks'
        }]
    },
    {
        code: 'MNE',
        name:
        {
            fr: "Monténégro",
            en: "Montenegro",
            it: "Montenegro",
            es: "Montenegro"
        },
        capital:
        {
            fr: "Podgorica",
            en: "Podgorica",
            it: "Podgorica",
            es: "Podgorica"
        },
        official_name:
        {
            fr: "République du Monténégro",
            en: "Montenegro",
            it: "Montenegro",
            es: "República de Montenegro"
        },
        region: 'Southeast Europe',
        population: 621718,
        google_maps_link: 'https://goo.gl/maps/4THX1fM7WqANuPbB8',
        flag: 'https://flagcdn.com/w320/me.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MNG',
        name:
        {
            fr: "Mongolie",
            en: "Mongolia",
            it: "Mongolia",
            es: "Mongolia"
        },
        capital:
        {
            fr: "Oulan-Bator",
            en: "Ulan Bator",
            it: "Ulan Bator",
            es: "Ulán Bator"
        },
        official_name:
        {
            fr: "Mongolie",
            en: "Mongolia",
            it: "Mongolia",
            es: "Mongolia"
        },
        region: 'Eastern Asia',
        population: 3278292,
        google_maps_link: 'https://goo.gl/maps/A1X7bMCKThBDNjzH6',
        flag: 'https://flagcdn.com/w320/mn.png',
        currencies: [
        {
            'name': 'Mongolian tögrög',
            'symbol': '₮'
        }]
    },
    {
        code: 'MNP',
        name:
        {
            fr: "Îles Mariannes du Nord",
            en: "Northern Mariana Islands",
            it: "Isole Marianne Settentrionali",
            es: "Islas Marianas del Norte"
        },
        capital:
        {
            fr: "Saipan",
            en: "Saipan",
            it: "Saipan",
            es: "Garapan"
        },
        official_name:
        {
            fr: "Commonwealth des Îles Mariannes du Nord",
            en: "Commonwealth of the Northern Mariana Islands",
            it: "Commonwealth delle Isole Marianne Settentrionali",
            es: "Mancomunidad de las Islas Marianas del Norte"
        },
        region: 'Micronesia',
        population: 57557,
        google_maps_link: 'https://goo.gl/maps/cpZ67knoRAcfu1417',
        flag: 'https://flagcdn.com/w320/mp.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'MOZ',
        name:
        {
            fr: "Mozambique",
            en: "Mozambique",
            it: "Mozambico",
            es: "Mozambique"
        },
        capital:
        {
            fr: "Maputo",
            en: "Maputo",
            it: "Maputo",
            es: "Maputo"
        },
        official_name:
        {
            fr: "République du Mozambique",
            en: "Republic of Mozambique",
            it: "Repubblica del Mozambico",
            es: "República de Mozambique"
        },
        region: 'Eastern Africa',
        population: 31255435,
        google_maps_link: 'https://goo.gl/maps/xCLcY9fzU6x4Pueu5',
        flag: 'https://flagcdn.com/w320/mz.png',
        currencies: [
        {
            'name': 'Mozambican metical',
            'symbol': 'MT'
        }]
    },
    {
        code: 'MRT',
        name:
        {
            fr: "Mauritanie",
            en: "Mauritania",
            it: "Mauritania",
            es: "Mauritania"
        },
        capital:
        {
            fr: "Nouakchott",
            en: "Nouakchott",
            it: "Nouakchott",
            es: "Nuakchot"
        },
        official_name:
        {
            fr: "République islamique de Mauritanie",
            en: "Islamic Republic of Mauritania",
            it: "Repubblica Islamica di Mauritania",
            es: "República Islámica de Mauritania"
        },
        region: 'Western Africa',
        population: 4649660,
        google_maps_link: 'https://goo.gl/maps/im2MmQ5jFjzxWBks5',
        flag: 'https://flagcdn.com/w320/mr.png',
        currencies: [
        {
            'name': 'Mauritanian ouguiya',
            'symbol': 'UM'
        }]
    },
    {
        code: 'MSR',
        name:
        {
            fr: "Montserrat",
            en: "Montserrat",
            it: "Montserrat",
            es: "Montserrat"
        },
        capital:
        {
            fr: "Plymouth",
            en: "Plymouth",
            it: "Plymouth",
            es: "Plymouth"
        },
        official_name:
        {
            fr: "Montserrat",
            en: "Montserrat",
            it: "Montserrat",
            es: "Montserrat"
        },
        region: 'Caribbean',
        population: 4922,
        google_maps_link: 'https://goo.gl/maps/CSbe7UmxPmiwQB7GA',
        flag: 'https://flagcdn.com/w320/ms.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'MTQ',
        name:
        {
            fr: "Martinique",
            en: "Martinique",
            it: "Martinica",
            es: "Martinica"
        },
        capital:
        {
            fr: "Fort-de-France",
            en: "Fort-de-France",
            it: "Fort-de-France",
            es: "Fort-de-France"
        },
        official_name:
        {
            fr: "Martinique",
            en: "Martinique",
            it: "Martinica",
            es: "Martinica"
        },
        region: 'Caribbean',
        population: 378243,
        google_maps_link: 'https://goo.gl/maps/87ER7sDAFU7JjcvR6',
        flag: 'https://flagcdn.com/w320/mq.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'MUS',
        name:
        {
            fr: "Maurice",
            en: "Mauritius",
            it: "Mauritius",
            es: "Mauricio"
        },
        capital:
        {
            fr: "Port-Louis",
            en: "Port Louis",
            it: "Port Louis",
            es: "Port Louis"
        },
        official_name:
        {
            fr: "République de Maurice",
            en: "Republic of Mauritius",
            it: "Repubblica di Mauritius",
            es: "República de Mauricio"
        },
        region: 'Eastern Africa',
        population: 1265740,
        google_maps_link: 'https://goo.gl/maps/PpKtZ4W3tir5iGrz7',
        flag: 'https://flagcdn.com/w320/mu.png',
        currencies: [
        {
            'name': 'Mauritian rupee',
            'symbol': '₨'
        }]
    },
    {
        code: 'MWI',
        name:
        {
            fr: "Malawi",
            en: "Malawi",
            it: "Malawi",
            es: "Malaui"
        },
        capital:
        {
            fr: "Lilongwe",
            en: "Lilongwe",
            it: "Lilongwe",
            es: "Lilongüe"
        },
        official_name:
        {
            fr: "République du Malawi",
            en: "Republic of Malawi",
            it: "Repubblica del Malawi",
            es: "República de Malaui"
        },
        region: 'Eastern Africa',
        population: 19129955,
        google_maps_link: 'https://goo.gl/maps/mc6z83pW9m98X2Ef6',
        flag: 'https://flagcdn.com/w320/mw.png',
        currencies: [
        {
            'name': 'Malawian kwacha',
            'symbol': 'MK'
        }]
    },
    {
        code: 'MYS',
        name:
        {
            fr: "Malaisie",
            en: "Malaysia",
            it: "Malesia",
            es: "Malasia"
        },
        capital:
        {
            fr: "Kuala Lumpur",
            en: "Kuala Lumpur",
            it: "Kuala Lumpur",
            es: "Kuala Lumpur"
        },
        official_name:
        {
            fr: "Fédération de Malaisie",
            en: "Malaysia",
            it: "Federazione della Malesia",
            es: "Federación de Malasia"
        },
        region: 'South-Eastern Asia',
        population: 32365998,
        google_maps_link: 'https://goo.gl/maps/qrY1PNeUXGyXDcPy6',
        flag: 'https://flagcdn.com/w320/my.png',
        currencies: [
        {
            'name': 'Malaysian ringgit',
            'symbol': 'RM'
        }]
    },
    {
        code: 'MYT',
        name:
        {
            fr: "Mayotte",
            en: "Mayotte",
            it: "Mayotte",
            es: "Mayotte"
        },
        capital:
        {
            fr: "Mamoudzou",
            en: "Mamoudzou",
            it: "Mamoudzou",
            es: "Mamoudzou"
        },
        official_name:
        {
            fr: "Département de Mayotte",
            en: "Department of Mayotte",
            it: "Mayotte",
            es: "Departamento de Mayotte"
        },
        region: 'Eastern Africa',
        population: 226915,
        google_maps_link: 'https://goo.gl/maps/1e7MXmfBwQv3TQGF7',
        flag: 'https://flagcdn.com/w320/yt.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'NAM',
        name:
        {
            fr: "Namibie",
            en: "Namibia",
            it: "Namibia",
            es: "Namibia"
        },
        capital:
        {
            fr: "Windhoek",
            en: "Windhoek",
            it: "Windhoek",
            es: "Windhoek"
        },
        official_name:
        {
            fr: "République de Namibie",
            en: "Republic of Namibia",
            it: "Repubblica di Namibia",
            es: "República de Namibia"
        },
        region: 'Southern Africa',
        population: 2540916,
        google_maps_link: 'https://goo.gl/maps/oR1i8BFEYX3EY83WA',
        flag: 'https://flagcdn.com/w320/na.png',
        currencies: [
        {
            'name': 'Namibian dollar',
            'symbol': '$'
        },
        {
            'name': 'South African rand',
            'symbol': 'R'
        }]
    },
    {
        code: 'NCL',
        name:
        {
            fr: "Nouvelle-Calédonie",
            en: "New Caledonia",
            it: "Nuova Caledonia",
            es: "Nueva Caledonia"
        },
        capital:
        {
            fr: "Nouméa",
            en: "Nouméa",
            it: "Nouméa",
            es: "Numea"
        },
        official_name:
        {
            fr: "Territoire des Nouvelle-Calédonie et Dépendances",
            en: "New Caledonia",
            it: "Nuova Caledonia",
            es: "Nueva Caledonia"
        },
        region: 'Melanesia',
        population: 271960,
        google_maps_link: 'https://goo.gl/maps/cBhtCeMdob4U7FRU9',
        flag: 'https://flagcdn.com/w320/nc.png',
        currencies: [
        {
            'name': 'CFP franc',
            'symbol': '₣'
        }]
    },
    {
        code: 'NER',
        name:
        {
            fr: "Niger",
            en: "Niger",
            it: "Niger",
            es: "Níger"
        },
        capital:
        {
            fr: "Niamey",
            en: "Niamey",
            it: "Niamey",
            es: "Niamey"
        },
        official_name:
        {
            fr: "République du Niger",
            en: "Republic of Niger",
            it: "Repubblica del Niger",
            es: "República del Níger"
        },
        region: 'Western Africa',
        population: 24206636,
        google_maps_link: 'https://goo.gl/maps/VKNU2TLsZcgxM49c8',
        flag: 'https://flagcdn.com/w320/ne.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'NFK',
        name:
        {
            fr: "Île Norfolk",
            en: "Norfolk Island",
            it: "Norfolk Island",
            es: "Isla de Norfolk"
        },
        capital:
        {
            fr: "Kingston",
            en: "Kingston",
            it: "Kingston",
            es: "Kingston"
        },
        official_name:
        {
            fr: "Territoire de l'île Norfolk",
            en: "Territory of Norfolk Island",
            it: "Isola Norfolk",
            es: "Territorio de la Isla de Norfolk"
        },
        region: 'Australia and New Zealand',
        population: 2302,
        google_maps_link: 'https://goo.gl/maps/pbvtm6XYd1iZbjky5',
        flag: 'https://flagcdn.com/w320/nf.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'NGA',
        name:
        {
            fr: "Nigéria",
            en: "Nigeria",
            it: "Nigeria",
            es: "Nigeria"
        },
        capital:
        {
            fr: "Abuja",
            en: "Abuja",
            it: "Abuja",
            es: "Abuya"
        },
        official_name:
        {
            fr: "République fédérale du Nigéria",
            en: "Federal Republic of Nigeria",
            it: "Repubblica Federale della Nigeria",
            es: "República Federal de Nigeria"
        },
        region: 'Western Africa',
        population: 206139587,
        google_maps_link: 'https://goo.gl/maps/LTn417qWwBPFszuV9',
        flag: 'https://flagcdn.com/w320/ng.png',
        currencies: [
        {
            'name': 'Nigerian naira',
            'symbol': '₦'
        }]
    },
    {
        code: 'NIC',
        name:
        {
            fr: "Nicaragua",
            en: "Nicaragua",
            it: "Nicaragua",
            es: "Nicaragua"
        },
        capital:
        {
            fr: "Managua",
            en: "Managua",
            it: "Managua",
            es: "Managua"
        },
        official_name:
        {
            fr: "République du Nicaragua",
            en: "Republic of Nicaragua",
            it: "Repubblica del Nicaragua",
            es: "República de Nicaragua"
        },
        region: 'Central America',
        population: 6624554,
        google_maps_link: 'https://goo.gl/maps/P77LaEVkKJKXneRC6',
        flag: 'https://flagcdn.com/w320/ni.png',
        currencies: [
        {
            'name': 'Nicaraguan córdoba',
            'symbol': 'C$'
        }]
    },
    {
        code: 'NIU',
        name:
        {
            fr: "Niue",
            en: "Niue",
            it: "Niue",
            es: "Niue"
        },
        capital:
        {
            fr: "Alofi",
            en: "Alofi",
            it: "Alofi",
            es: "Alofi"
        },
        official_name:
        {
            fr: "Niue",
            en: "Niue",
            it: "Niue",
            es: "Niue"
        },
        region: 'Polynesia',
        population: 1470,
        google_maps_link: 'https://goo.gl/maps/xFgdzs3E55Rk1y8P9',
        flag: 'https://flagcdn.com/w320/nu.png',
        currencies: [
        {
            'name': 'New Zealand dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'NLD',
        name:
        {
            fr: "Pays-Bas",
            en: "Netherlands",
            it: "Paesi Bassi",
            es: "Países Bajos"
        },
        capital:
        {
            fr: "Amsterdam",
            en: "Amsterdam",
            it: "Amsterdam",
            es: "Ámsterdam"
        },
        official_name:
        {
            fr: "Royaume des Pays-Bas",
            en: "Kingdom of the Netherlands",
            it: "Regno dei Paesi Bassi",
            es: "Reino de los Países Bajos"
        },
        region: 'Western Europe',
        population: 16655799,
        google_maps_link: 'https://goo.gl/maps/Hv6zQswGhFxoVVBm6',
        flag: 'https://flagcdn.com/w320/nl.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'NOR',
        name:
        {
            fr: "Norvège",
            en: "Norway",
            it: "Norvegia",
            es: "Noruega"
        },
        capital:
        {
            fr: "Oslo",
            en: "Oslo",
            it: "Oslo",
            es: "Oslo"
        },
        official_name:
        {
            fr: "Royaume de Norvège",
            en: "Kingdom of Norway",
            it: "Regno di Norvegia",
            es: "Reino de Noruega"
        },
        region: 'Northern Europe',
        population: 5379475,
        google_maps_link: 'https://goo.gl/maps/htWRrphA7vNgQNdSA',
        flag: 'https://flagcdn.com/w320/no.png',
        currencies: [
        {
            'name': 'Norwegian krone',
            'symbol': 'kr'
        }]
    },
    {
        code: 'NPL',
        name:
        {
            fr: "Népal",
            en: "Nepal",
            it: "Nepal",
            es: "Nepal"
        },
        capital:
        {
            fr: "Katmandou",
            en: "Kathmandu",
            it: "Kathmandu",
            es: "Katmandú"
        },
        official_name:
        {
            fr: "République démocratique fédérale du Népal",
            en: "Federal Democratic Republic of Nepal",
            it: "Repubblica Federale Democratica di Nepal",
            es: "República Democrática Federal de Nepal"
        },
        region: 'Southern Asia',
        population: 29136808,
        google_maps_link: 'https://goo.gl/maps/UMj2zpbQp7B5c3yT7',
        flag: 'https://flagcdn.com/w320/np.png',
        currencies: [
        {
            'name': 'Nepalese rupee',
            'symbol': '₨'
        }]
    },
    {
        code: 'NRU',
        name:
        {
            fr: "Nauru",
            en: "Nauru",
            it: "Nauru",
            es: "Nauru"
        },
        capital:
        {
            fr: "Yaren",
            en: "Yaren",
            it: "Nauru",
            es: "Yaren"
        },
        official_name:
        {
            fr: "République de Nauru",
            en: "Republic of Nauru",
            it: "Repubblica di Nauru",
            es: "República de Nauru"
        },
        region: 'Micronesia',
        population: 10834,
        google_maps_link: 'https://goo.gl/maps/kyAGw6XEJgjSMsTK7',
        flag: 'https://flagcdn.com/w320/nr.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'NZL',
        name:
        {
            fr: "Nouvelle-Zélande",
            en: "New Zealand",
            it: "Nuova Zelanda",
            es: "Nueva Zelanda"
        },
        capital:
        {
            fr: "Wellington",
            en: "Wellington",
            it: "Wellington",
            es: "Wellington"
        },
        official_name:
        {
            fr: "Nouvelle-Zélande",
            en: "New Zealand",
            it: "Nuova Zelanda",
            es: "Nueva Zelanda"
        },
        region: 'Australia and New Zealand',
        population: 5084300,
        google_maps_link: 'https://goo.gl/maps/xXiDQo65dwdpw9iu8',
        flag: 'https://flagcdn.com/w320/nz.png',
        currencies: [
        {
            'name': 'New Zealand dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'OMN',
        name:
        {
            fr: "Oman",
            en: "Oman",
            it: "Oman",
            es: "Omán"
        },
        capital:
        {
            fr: "Mascate",
            en: "Muscat",
            it: "Muscat",
            es: "Mascate"
        },
        official_name:
        {
            fr: "Sultanat d'Oman",
            en: "Sultanate of Oman",
            it: "Sultanto di Oman",
            es: "Sultanato de Omán"
        },
        region: 'Western Asia',
        population: 5106622,
        google_maps_link: 'https://goo.gl/maps/L2BoXoAwDDwWecnw5',
        flag: 'https://flagcdn.com/w320/om.png',
        currencies: [
        {
            'name': 'Omani rial',
            'symbol': 'ر.ع.'
        }]
    },
    {
        code: 'PAK',
        name:
        {
            fr: "Pakistan",
            en: "Pakistan",
            it: "Pakistan",
            es: "Pakistán"
        },
        capital:
        {
            fr: "Islamabad",
            en: "Islamabad",
            it: "Islamabad",
            es: "Islamabad"
        },
        official_name:
        {
            fr: "République islamique du Pakistan",
            en: "Islamic Republic of Pakistan",
            it: "Repubblica Islamica del Pakistan",
            es: "República Islámica de Pakistán"
        },
        region: 'Southern Asia',
        population: 220892331,
        google_maps_link: 'https://goo.gl/maps/5LYujdfR5yLUXoERA',
        flag: 'https://flagcdn.com/w320/pk.png',
        currencies: [
        {
            'name': 'Pakistani rupee',
            'symbol': '₨'
        }]
    },
    {
        code: 'PAN',
        name:
        {
            fr: "Panama",
            en: "Panama",
            it: "Panamá",
            es: "Panamá"
        },
        capital:
        {
            fr: "Panama",
            en: "Panama City",
            it: "Panamá",
            es: "Panamá"
        },
        official_name:
        {
            fr: "République du Panama",
            en: "Republic of Panama",
            it: "Repubblica di Panamá",
            es: "República de Panamá"
        },
        region: 'Central America',
        population: 4314768,
        google_maps_link: 'https://goo.gl/maps/sEN7sKqeawa5oPNLA',
        flag: 'https://flagcdn.com/w320/pa.png',
        currencies: [
        {
            'name': 'Panamanian balboa',
            'symbol': 'B/.'
        },
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'PCN',
        name:
        {
            fr: "Îles Pitcairn",
            en: "Pitcairn Islands",
            it: "Pitcairn",
            es: "Islas Pitcairn"
        },
        capital:
        {
            fr: "Adamstown",
            en: "Adamstown",
            it: "Adamstown",
            es: "Adamstown"
        },
        official_name:
        {
            fr: "Pitcairn, Henderson, Ducie et Oeno",
            en: "Pitcairn Group of Islands",
            it: "Isole Pitcairn",
            es: "Islas Pitcairn"
        },
        region: 'Polynesia',
        population: 56,
        google_maps_link: 'https://goo.gl/maps/XGJMnMAigXjXcxSa7',
        flag: 'https://flagcdn.com/w320/pn.png',
        currencies: [
        {
            'name': 'New Zealand dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'PER',
        name:
        {
            fr: "Pérou",
            en: "Peru",
            it: "Perù",
            es: "Perú"
        },
        capital:
        {
            fr: "Lima",
            en: "Lima",
            it: "Lima",
            es: "Lima"
        },
        official_name:
        {
            fr: "République du Pérou",
            en: "Republic of Peru",
            it: "Repubblica del Perù",
            es: "República del Perú"
        },
        region: 'South America',
        population: 32971846,
        google_maps_link: 'https://goo.gl/maps/uDWEUaXNcZTng1fP6',
        flag: 'https://flagcdn.com/w320/pe.png',
        currencies: [
        {
            'name': 'Peruvian sol',
            'symbol': 'S/ '
        }]
    },
    {
        code: 'PHL',
        name:
        {
            fr: "Philippines",
            en: "Philippines",
            it: "Filippine",
            es: "Filipinas"
        },
        capital:
        {
            fr: "Manille",
            en: "Manila",
            it: "Manila",
            es: "Manila"
        },
        official_name:
        {
            fr: "République des Philippines",
            en: "Republic of the Philippines",
            it: "Repubblica delle Filippine",
            es: "República de Filipinas"
        },
        region: 'South-Eastern Asia',
        population: 109581085,
        google_maps_link: 'https://goo.gl/maps/k8T2fb5VMUfsWFX6A',
        flag: 'https://flagcdn.com/w320/ph.png',
        currencies: [
        {
            'name': 'Philippine peso',
            'symbol': '₱'
        }]
    },
    {
        code: 'PLW',
        name:
        {
            fr: "Palaos",
            en: "Palau",
            it: "Palau",
            es: "Palaos"
        },
        capital:
        {
            fr: "Ngerulmud",
            en: "Ngerulmud",
            it: "Melekeok",
            es: "Ngerulmud"
        },
        official_name:
        {
            fr: "République des Palaos",
            en: "Republic of Palau",
            it: "Repubblica di Palau",
            es: "República de Palaos"
        },
        region: 'Micronesia',
        population: 18092,
        google_maps_link: 'https://goo.gl/maps/MVasQBbUkQP7qQDR9',
        flag: 'https://flagcdn.com/w320/pw.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'PNG',
        name:
        {
            fr: "Papouasie-Nouvelle-Guinée",
            en: "Papua New Guinea",
            it: "Papua Nuova Guinea",
            es: "Papúa Nueva Guinea"
        },
        capital:
        {
            fr: "Port Moresby",
            en: "Port Moresby",
            it: "Port Moresby",
            es: "Port Moresby"
        },
        official_name:
        {
            fr: "État indépendant de Papouasie-Nouvelle-Guinée",
            en: "Independent State of Papua New Guinea",
            it: "Stato Indipendente di Papua Nuova Guinea",
            es: "Estado Independiente de Papúa Nueva Guinea"
        },
        region: 'Melanesia',
        population: 8947027,
        google_maps_link: 'https://goo.gl/maps/ChGmzZBjZ3vnBwR2A',
        flag: 'https://flagcdn.com/w320/pg.png',
        currencies: [
        {
            'name': 'Papua New Guinean kina',
            'symbol': 'K'
        }]
    },
    {
        code: 'POL',
        name:
        {
            fr: "Pologne",
            en: "Poland",
            it: "Polonia",
            es: "Polonia"
        },
        capital:
        {
            fr: "Varsovie",
            en: "Warsaw",
            it: "Varsavia",
            es: "Varsovia"
        },
        official_name:
        {
            fr: "République de Pologne",
            en: "Republic of Poland",
            it: "Repubblica di Polonia",
            es: "República de Polonia"
        },
        region: 'Central Europe',
        population: 37950802,
        google_maps_link: 'https://goo.gl/maps/gY9Xw4Sf4415P4949',
        flag: 'https://flagcdn.com/w320/pl.png',
        currencies: [
        {
            'name': 'Polish złoty',
            'symbol': 'zł'
        }]
    },
    {
        code: 'PRI',
        name:
        {
            fr: "Porto Rico",
            en: "Puerto Rico",
            it: "Porto Rico",
            es: "Puerto Rico"
        },
        capital:
        {
            fr: "San Juan",
            en: "San Juan",
            it: "San Juan",
            es: "San Juan"
        },
        official_name:
        {
            fr: "Communauté de Porto Rico",
            en: "Commonwealth of Puerto Rico",
            it: "Porto Rico",
            es: "Estado Libre Asociado de Puerto Rico"
        },
        region: 'Caribbean',
        population: 3194034,
        google_maps_link: 'https://goo.gl/maps/sygfDbtwn389wu8x5',
        flag: 'https://flagcdn.com/w320/pr.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'PRK',
        name:
        {
            fr: "Corée du Nord",
            en: "North Korea",
            it: "Corea del Nord",
            es: "Corea del Norte"
        },
        capital:
        {
            fr: "Pyongyang",
            en: "Pyongyang",
            it: "Pyongyang",
            es: "Pyongyang"
        },
        official_name:
        {
            fr: "République populaire démocratique de Corée",
            en: "Democratic People's Republic of Korea",
            it: "Repubblica Democratica Popolare di Corea",
            es: "República Popular Democrática de Corea"
        },
        region: 'Eastern Asia',
        population: 25778815,
        google_maps_link: 'https://goo.gl/maps/9q5T2DMeH5JL7Tky6',
        flag: 'https://flagcdn.com/w320/kp.png',
        currencies: [
        {
            'name': 'North Korean won',
            'symbol': '₩'
        }]
    },
    {
        code: 'PRT',
        name:
        {
            fr: "Portugal",
            en: "Portugal",
            it: "Portogallo",
            es: "Portugal"
        },
        capital:
        {
            fr: "Lisbonne",
            en: "Lisbon",
            it: "Lisbona",
            es: "Lisboa"
        },
        official_name:
        {
            fr: "République portugaise",
            en: "Portuguese Republic",
            it: "Repubblica Portoghese",
            es: "República Portuguesa"
        },
        region: 'Southern Europe',
        population: 10305564,
        google_maps_link: 'https://goo.gl/maps/BaTBSyc4GWMmbAKB8',
        flag: 'https://flagcdn.com/w320/pt.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'PRY',
        name:
        {
            fr: "Paraguay",
            en: "Paraguay",
            it: "Paraguay",
            es: "Paraguay"
        },
        capital:
        {
            fr: "Asunción",
            en: "Asunción",
            it: "Asunción",
            es: "Asunción"
        },
        official_name:
        {
            fr: "République du Paraguay",
            en: "Republic of Paraguay",
            it: "Repubblica del Paraguay",
            es: "República del Paraguay"
        },
        region: 'South America',
        population: 7132530,
        google_maps_link: 'https://goo.gl/maps/JtnqG73WJn1Gx6mz6',
        flag: 'https://flagcdn.com/w320/py.png',
        currencies: [
        {
            'name': 'Paraguayan guaraní',
            'symbol': '₲'
        }]
    },
    {
        code: 'PSE',
        name:
        {
            fr: "Palestine",
            en: "Palestine",
            it: "Territori palestinesi",
            es: "Palestina"
        },
        capital:
        {
            fr: "Jérusalem-Est",
            en: "Ramallah",
            it: "Gerusalemme Est",
            es: "Jerusalén Este"
        },
        official_name:
        {
            fr: "État de Palestine",
            en: "State of Palestine",
            it: "Autorità Nazionale Palestinese",
            es: "Estado de Palestina"
        },
        region: 'Western Asia',
        population: 4803269,
        google_maps_link: 'https://goo.gl/maps/QvTbkRdmdWEoYAmt5',
        flag: 'https://flagcdn.com/w320/ps.png',
        currencies: [
        {
            'name': 'Egyptian pound',
            'symbol': 'E£'
        },
        {
            'name': 'Israeli new shekel',
            'symbol': '₪'
        },
        {
            'name': 'Jordanian dinar',
            'symbol': 'JD'
        }]
    },
    {
        code: 'PYF',
        name:
        {
            fr: "Polynésie française",
            en: "French Polynesia",
            it: "Polinesia Francese",
            es: "Polinesia Francesa"
        },
        capital:
        {
            fr: "Papeete",
            en: "Papeetē",
            it: "Papeete",
            es: "Papeete"
        },
        official_name:
        {
            fr: "Polynésie française",
            en: "French Polynesia",
            it: "Polinesia Francese",
            es: "Colectividad de Polinesia Francesa"
        },
        region: 'Polynesia',
        population: 280904,
        google_maps_link: 'https://goo.gl/maps/xgg6BQTRyeQg4e1m6',
        flag: 'https://flagcdn.com/w320/pf.png',
        currencies: [
        {
            'name': 'CFP franc',
            'symbol': '₣'
        }]
    },
    {
        code: 'QAT',
        name:
        {
            fr: "Qatar",
            en: "Qatar",
            it: "Qatar",
            es: "Catar"
        },
        capital:
        {
            fr: "Doha",
            en: "Doha",
            it: "Doha",
            es: "Doha"
        },
        official_name:
        {
            fr: "État du Qatar",
            en: "State of Qatar",
            it: "Stato del Qatar",
            es: "Estado de Catar"
        },
        region: 'Western Asia',
        population: 2881060,
        google_maps_link: 'https://goo.gl/maps/ZV76Y49z7LLUZ2KQ6',
        flag: 'https://flagcdn.com/w320/qa.png',
        currencies: [
        {
            'name': 'Qatari riyal',
            'symbol': 'ر.ق'
        }]
    },
    {
        code: 'REU',
        name:
        {
            fr: "Réunion",
            en: "Réunion",
            it: "Riunione",
            es: "Reunión"
        },
        capital:
        {
            fr: "Saint-Denis",
            en: "Saint-Denis",
            it: "Réunion",
            es: "Saint-Denis"
        },
        official_name:
        {
            fr: "Réunion",
            en: "Réunion Island",
            it: "Riunione",
            es: "Departamento de Reunión"
        },
        region: 'Eastern Africa',
        population: 840974,
        google_maps_link: 'https://goo.gl/maps/wWpBrXsp8UHVbah29',
        flag: 'https://flagcdn.com/w320/re.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'ROU',
        name:
        {
            fr: "Roumanie",
            en: "Romania",
            it: "Romania",
            es: "Rumania"
        },
        capital:
        {
            fr: "Bucarest",
            en: "Bucharest",
            it: "Bucarest",
            es: "Bucarest"
        },
        official_name:
        {
            fr: "Roumanie",
            en: "Romania",
            it: "Romania",
            es: "Rumania"
        },
        region: 'Southeast Europe',
        population: 19286123,
        google_maps_link: 'https://goo.gl/maps/845hAgCf1mDkN3vr7',
        flag: 'https://flagcdn.com/w320/ro.png',
        currencies: [
        {
            'name': 'Romanian leu',
            'symbol': 'lei'
        }]
    },
    {
        code: 'RUS',
        name:
        {
            fr: "Russie",
            en: "Russia",
            it: "Russia",
            es: "Rusia"
        },
        capital:
        {
            fr: "Moscou",
            en: "Moscow",
            it: "Mosca",
            es: "Moscú"
        },
        official_name:
        {
            fr: "Fédération de Russie",
            en: "Russian Federation",
            it: "Federazione Russa",
            es: "Federación de Rusia"
        },
        region: 'Eastern Europe',
        population: 144104080,
        google_maps_link: 'https://goo.gl/maps/4F4PpDhGJgVvLby57',
        flag: 'https://flagcdn.com/w320/ru.png',
        currencies: [
        {
            'name': 'Russian ruble',
            'symbol': '₽'
        }]
    },
    {
        code: 'RWA',
        name:
        {
            fr: "Rwanda",
            en: "Rwanda",
            it: "Ruanda",
            es: "Ruanda"
        },
        capital:
        {
            fr: "Kigali",
            en: "Kigali",
            it: "Kigali",
            es: "Kigali"
        },
        official_name:
        {
            fr: "République du Rwanda",
            en: "Republic of Rwanda",
            it: "Repubblica del Ruanda",
            es: "República de Ruanda"
        },
        region: 'Eastern Africa',
        population: 12952209,
        google_maps_link: 'https://goo.gl/maps/j5xb5r7CLqjYbyP86',
        flag: 'https://flagcdn.com/w320/rw.png',
        currencies: [
        {
            'name': 'Rwandan franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'SAU',
        name:
        {
            fr: "Arabie saoudite",
            en: "Saudi Arabia",
            it: "Arabia Saudita",
            es: "Arabia Saudita"
        },
        capital:
        {
            fr: "Riyad",
            en: "Riyadh",
            it: "Riyad",
            es: "Riad"
        },
        official_name:
        {
            fr: "Royaume d'Arabie saoudite",
            en: "Kingdom of Saudi Arabia",
            it: "Regno dell'Arabia Saudita",
            es: "Reino de Arabia Saudita"
        },
        region: 'Western Asia',
        population: 34813867,
        google_maps_link: 'https://goo.gl/maps/5PSjvdJ1AyaLFRrG9',
        flag: 'https://flagcdn.com/w320/sa.png',
        currencies: [
        {
            'name': 'Saudi riyal',
            'symbol': 'ر.س'
        }]
    },
    {
        code: 'SDN',
        name:
        {
            fr: "Soudan",
            en: "Sudan",
            it: "Sudan",
            es: "Sudán"
        },
        capital:
        {
            fr: "Khartoum",
            en: "Khartoum",
            it: "Giacarta",
            es: "Jartum"
        },
        official_name:
        {
            fr: "République du Soudan",
            en: "Republic of the Sudan",
            it: "Repubblica del Sudan",
            es: "República del Sudán"
        },
        region: 'Northern Africa',
        population: 43849269,
        google_maps_link: 'https://goo.gl/maps/bNW7YUJCaqR8zcXn7',
        flag: 'https://flagcdn.com/w320/sd.png',
        currencies: [
        {
            'name': 'Sudanese pound',
            'symbol': 'No symbol'
        }]
    },
    {
        code: 'SEN',
        name:
        {
            fr: "Sénégal",
            en: "Senegal",
            it: "Senegal",
            es: "Senegal"
        },
        capital:
        {
            fr: "Dakar",
            en: "Dakar",
            it: "Dakar",
            es: "Dakar"
        },
        official_name:
        {
            fr: "République du Sénégal",
            en: "Republic of Senegal",
            it: "Repubblica del Senegal",
            es: "República de Senegal"
        },
        region: 'Western Africa',
        population: 16743930,
        google_maps_link: 'https://goo.gl/maps/o5f1uD5nyihCL3HCA',
        flag: 'https://flagcdn.com/w320/sn.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'SGP',
        name:
        {
            fr: "Singapour",
            en: "Singapore",
            it: "Singapore",
            es: "Singapur"
        },
        capital:
        {
            fr: "Singapour",
            en: "Singapore",
            it: "Singapore",
            es: "Singapur"
        },
        official_name:
        {
            fr: "République de Singapour",
            en: "Republic of Singapore",
            it: "Repubblica di Singapore",
            es: "República de Singapur"
        },
        region: 'South-Eastern Asia',
        population: 5685807,
        google_maps_link: 'https://goo.gl/maps/QbQt9Y9b5KFzsahV6',
        flag: 'https://flagcdn.com/w320/sg.png',
        currencies: [
        {
            'name': 'Singapore dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'SHN',
        name:
        {
            fr: "Sainte-Hélène",
            en: "Saint Helena, Ascension and Tristan da Cunha",
            it: "Sant'Elena, Ascensione e Tristan da Cunha",
            es: "Santa Elena, Ascensión y Tristán de Acuña"
        },
        capital:
        {
            fr: "Jamestown",
            en: "Jamestown",
            it: "Jamestown",
            es: "Jamestown"
        },
        official_name:
        {
            fr: "Territoire britannique de Sainte-Hélène, Ascension et Tristan da Cunha",
            en: "Saint Helena, Ascension and Tristan da Cunha",
            it: "Sant'Elena, Ascensione e Tristan da Cunha",
            es: "Santa Elena, Ascensión y Tristán de Acuña"
        },
        region: 'Western Africa',
        population: 53192,
        google_maps_link: 'https://goo.gl/maps/iv4VxnPzHkjLCJuc6',
        flag: 'https://flagcdn.com/w320/sh.png',
        currencies: [
        {
            'name': 'Pound sterling',
            'symbol': '£'
        },
        {
            'name': 'Saint Helena pound',
            'symbol': '£'
        }]
    },
    {
        code: 'SJM',
        name:
        {
            fr: "Svalbard et Jan Mayen",
            en: "Svalbard and Jan Mayen",
            it: "Svalbard e Jan Mayen",
            es: "Svalbard y Jan Mayen"
        },
        capital:
        {
            fr: "Longyearbyen",
            en: "Longyearbyen",
            it: "Longyearbyen",
            es: "Longyearbyen"
        },
        official_name:
        {
            fr: "Svalbard et Jan Mayen",
            en: "Svalbard og Jan Mayen",
            it: "Svalbard e Jan Mayen",
            es: "Svalbard y Jan Mayen"
        },
        region: 'Northern Europe',
        population: 2562,
        google_maps_link: 'https://goo.gl/maps/L2wyyn3cQ16PzQ5J8',
        flag: 'https://flagcdn.com/w320/sj.png',
        currencies: [
        {
            'name': 'krone',
            'symbol': 'kr'
        }]
    },
    {
        code: 'SLB',
        name:
        {
            fr: "Îles Salomon",
            en: "Solomon Islands",
            it: "Isole Salomone",
            es: "Islas Salomón"
        },
        capital:
        {
            fr: "Honiara",
            en: "Honiara",
            it: "Honiara",
            es: "Honiara"
        },
        official_name:
        {
            fr: "Îles Salomon",
            en: "Solomon Islands",
            it: "Isole Salomone",
            es: "Islas Salomón"
        },
        region: 'Melanesia',
        population: 686878,
        google_maps_link: 'https://goo.gl/maps/JbPkx86Ywjv8C1n8A',
        flag: 'https://flagcdn.com/w320/sb.png',
        currencies: [
        {
            'name': 'Solomon Islands dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'SLE',
        name:
        {
            fr: "Sierra Leone",
            en: "Sierra Leone",
            it: "Sierra Leone",
            es: "Sierra Leona"
        },
        capital:
        {
            fr: "Freetown",
            en: "Freetown",
            it: "Freetown",
            es: "Freetown"
        },
        official_name:
        {
            fr: "République de Sierra Leone",
            en: "Republic of Sierra Leone",
            it: "Repubblica della Sierra Leone",
            es: "República de Sierra Leona"
        },
        region: 'Western Africa',
        population: 7976985,
        google_maps_link: 'https://goo.gl/maps/jhacar85oq9QaeKB7',
        flag: 'https://flagcdn.com/w320/sl.png',
        currencies: [
        {
            'name': 'Sierra Leonean leone',
            'symbol': 'Le'
        }]
    },
    {
        code: 'SLV',
        name:
        {
            fr: "El Salvador",
            en: "El Salvador",
            it: "El Salvador",
            es: "El Salvador"
        },
        capital:
        {
            fr: "San Salvador",
            en: "San Salvador",
            it: "San Salvador",
            es: "San Salvador"
        },
        official_name:
        {
            fr: "République du Salvador",
            en: "Republic of El Salvador",
            it: "Repubblica di El Salvador",
            es: "República de El Salvador"
        },
        region: 'Central America',
        population: 6486201,
        google_maps_link: 'https://goo.gl/maps/cZnCEi5sEMQtKKcB7',
        flag: 'https://flagcdn.com/w320/sv.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'SMR',
        name:
        {
            fr: "Saint-Marin",
            en: "San Marino",
            it: "San Marino",
            es: "San Marino"
        },
        capital:
        {
            fr: "Saint-Marin",
            en: "City of San Marino",
            it: "San Marino",
            es: "San Marino"
        },
        official_name:
        {
            fr: "République de Saint-Marin",
            en: "Republic of San Marino",
            it: "Serenissima Repubblica di San Marino",
            es: "Serenísima República de San Marino"
        },
        region: 'Southern Europe',
        population: 33938,
        google_maps_link: 'https://goo.gl/maps/rxCVJjm8dVY93RPY8',
        flag: 'https://flagcdn.com/w320/sm.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'SOM',
        name:
        {
            fr: "Somalie",
            en: "Somalia",
            it: "Somalia",
            es: "Somalia"
        },
        capital:
        {
            fr: "Mogadiscio",
            en: "Mogadishu",
            it: "Mogadiscio",
            es: "Mogadiscio"
        },
        official_name:
        {
            fr: "République fédérale de Somalie",
            en: "Federal Republic of Somalia",
            it: "Repubblica Federale di Somalia",
            es: "República Federal de Somalia"
        },
        region: 'Eastern Africa',
        population: 15893219,
        google_maps_link: 'https://goo.gl/maps/8of8q7D1a8p7R6Fc9',
        flag: 'https://flagcdn.com/w320/so.png',
        currencies: [
        {
            'name': 'Somali shilling',
            'symbol': 'Sh'
        }]
    },
    {
        code: 'SPM',
        name:
        {
            fr: "Saint-Pierre-et-Miquelon",
            en: "Saint Pierre and Miquelon",
            it: "Saint Pierre e Miquelon",
            es: "San Pedro y Miquelón"
        },
        capital:
        {
            fr: "Saint-Pierre",
            en: "Saint-Pierre",
            it: "Saint Pierre",
            es: "San Pedro"
        },
        official_name:
        {
            fr: "Collectivité territoriale de Saint-Pierre-et-Miquelon",
            en: "Saint Pierre and Miquelon",
            it: "Saint Pierre e Miquelon",
            es: "San Pedro y Miquelón"
        },
        region: 'North America',
        population: 6069,
        google_maps_link: 'https://goo.gl/maps/bUM8Yc8pA8ghyhmt6',
        flag: 'https://flagcdn.com/w320/pm.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'SRB',
        name:
        {
            fr: "Serbie",
            en: "Serbia",
            it: "Serbia",
            es: "Serbia"
        },
        capital:
        {
            fr: "Belgrade",
            en: "Belgrade",
            it: "Belgrado",
            es: "Belgrado"
        },
        official_name:
        {
            fr: "République de Serbie",
            en: "Republic of Serbia",
            it: "Repubblica di Serbia",
            es: "República de Serbia"
        },
        region: 'Southeast Europe',
        population: 6908224,
        google_maps_link: 'https://goo.gl/maps/2Aqof7aV2Naq8YEK8',
        flag: 'https://flagcdn.com/w320/rs.png',
        currencies: [
        {
            'name': 'Serbian dinar',
            'symbol': 'дин.'
        }]
    },
    {
        code: 'SSD',
        name:
        {
            fr: "Soudan du Sud",
            en: "South Sudan",
            it: "Sudan del Sud",
            es: "Sudán del Sur"
        },
        capital:
        {
            fr: "Djouba",
            en: "Juba",
            it: "Khartum",
            es: "Yuba"
        },
        official_name:
        {
            fr: "République du Soudan du Sud",
            en: "Republic of South Sudan",
            it: "Repubblica del Sudan del Sud",
            es: "República de Sudán del Sur"
        },
        region: 'Middle Africa',
        population: 11193729,
        google_maps_link: 'https://goo.gl/maps/Zm1AYCXb9HSNF1P27',
        flag: 'https://flagcdn.com/w320/ss.png',
        currencies: [
        {
            'name': 'South Sudanese pound',
            'symbol': '£'
        }]
    },
    {
        code: 'STP',
        name:
        {
            fr: "São Tomé-et-Príncipe",
            en: "São Tomé and Príncipe",
            it: "São Tomé e Príncipe",
            es: "Santo Tomé y Príncipe"
        },
        capital:
        {
            fr: "São Tomé",
            en: "São Tomé",
            it: "São Tomé",
            es: "Santo Tomé"
        },
        official_name:
        {
            fr: "République démocratique de São Tomé-et-Príncipe",
            en: "Democratic Republic of São Tomé and Príncipe",
            it: "Repubblica Democratica di São Tomé e Príncipe",
            es: "República Democrática de Santo Tomé y Príncipe"
        },
        region: 'Middle Africa',
        population: 219161,
        google_maps_link: 'https://goo.gl/maps/9EUppm13RtPX9oF46',
        flag: 'https://flagcdn.com/w320/st.png',
        currencies: [
        {
            'name': 'São Tomé and Príncipe dobra',
            'symbol': 'Db'
        }]
    },
    {
        code: 'SUR',
        name:
        {
            fr: "Suriname",
            en: "Suriname",
            it: "Suriname",
            es: "Surinam"
        },
        capital:
        {
            fr: "Paramaribo",
            en: "Paramaribo",
            it: "Paramaribo",
            es: "Paramaribo"
        },
        official_name:
        {
            fr: "République du Suriname",
            en: "Republic of Suriname",
            it: "Repubblica del Suriname",
            es: "República de Surinam"
        },
        region: 'South America',
        population: 586634,
        google_maps_link: 'https://goo.gl/maps/iy7TuQLSi4qgoBoG7',
        flag: 'https://flagcdn.com/w320/sr.png',
        currencies: [
        {
            'name': 'Surinamese dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'SVK',
        name:
        {
            fr: "Slovaquie",
            en: "Slovakia",
            it: "Slovacchia",
            es: "Eslovaquia"
        },
        capital:
        {
            fr: "Bratislava",
            en: "Bratislava",
            it: "Bratislava",
            es: "Bratislava"
        },
        official_name:
        {
            fr: "République slovaque",
            en: "Slovak Republic",
            it: "Repubblica Slovacca",
            es: "República Eslovaca"
        },
        region: 'Central Europe',
        population: 5458827,
        google_maps_link: 'https://goo.gl/maps/uNSH2wW4bLoZVYJj7',
        flag: 'https://flagcdn.com/w320/sk.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'SVN',
        name:
        {
            fr: "Slovénie",
            en: "Slovenia",
            it: "Slovenia",
            es: "Eslovenia"
        },
        capital:
        {
            fr: "Ljubljana",
            en: "Ljubljana",
            it: "Lubiana",
            es: "Liubliana"
        },
        official_name:
        {
            fr: "République de Slovénie",
            en: "Republic of Slovenia",
            it: "Repubblica di Slovenia",
            es: "República de Eslovenia"
        },
        region: 'Central Europe',
        population: 2100126,
        google_maps_link: 'https://goo.gl/maps/7zgFmswcCJh5L5D49',
        flag: 'https://flagcdn.com/w320/si.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'SWE',
        name:
        {
            fr: "Suède",
            en: "Sweden",
            it: "Svezia",
            es: "Suecia"
        },
        capital:
        {
            fr: "Stockholm",
            en: "Stockholm",
            it: "Stoccolma",
            es: "Estocolmo"
        },
        official_name:
        {
            fr: "Royaume de Suède",
            en: "Kingdom of Sweden",
            it: "Regno di Svezia",
            es: "Reino de Suecia"
        },
        region: 'Northern Europe',
        population: 10353442,
        google_maps_link: 'https://goo.gl/maps/iqygE491ADVgnBW39',
        flag: 'https://flagcdn.com/w320/se.png',
        currencies: [
        {
            'name': 'Swedish krona',
            'symbol': 'kr'
        }]
    },
    {
        code: 'SWZ',
        name:
        {
            fr: "Eswatini",
            en: "Eswatini",
            it: "Eswatini",
            es: "Esuatini"
        },
        capital:
        {
            fr: "Mbabane",
            en: "Mbabane",
            it: "Mbabane",
            es: "Mbabane"
        },
        official_name:
        {
            fr: "Royaume d'Eswatini",
            en: "Kingdom of Eswatini",
            it: "Regno di Eswatini",
            es: "Reino de Esuatini"
        },
        region: 'Southern Africa',
        population: 1160164,
        google_maps_link: 'https://goo.gl/maps/cUY79eqQihFSE8hV6',
        flag: 'https://flagcdn.com/w320/sz.png',
        currencies: [
        {
            'name': 'Swazi lilangeni',
            'symbol': 'L'
        },
        {
            'name': 'South African rand',
            'symbol': 'R'
        }]
    },
    {
        code: 'SXM',
        name:
        {
            fr: "Sint Maarten",
            en: "Sint Maarten",
            it: "Sint Maarten",
            es: "San Martín (Países Bajos)"
        },
        capital:
        {
            fr: "Philipsburg",
            en: "Philipsburg",
            it: "Philipsburg",
            es: "Philipsburg"
        },
        official_name:
        {
            fr: "Collectivité de Sint Maarten",
            en: "Sint Maarten",
            it: "Sint Maarten",
            es: "San Martín"
        },
        region: 'Caribbean',
        population: 40812,
        google_maps_link: 'https://goo.gl/maps/DjvcESy1a1oGEZuNA',
        flag: 'https://flagcdn.com/w320/sx.png',
        currencies: [
        {
            'name': 'Netherlands Antillean guilder',
            'symbol': 'ƒ'
        }]
    },
    {
        code: 'SYC',
        name:
        {
            fr: "Seychelles",
            en: "Seychelles",
            it: "Seychelles",
            es: "Seychelles"
        },
        capital:
        {
            fr: "Victoria",
            en: "Victoria",
            it: "Victoria",
            es: "Victoria"
        },
        official_name:
        {
            fr: "République des Seychelles",
            en: "Republic of Seychelles",
            it: "Repubblica delle Seychelles",
            es: "República de las Seychelles"
        },
        region: 'Eastern Africa',
        population: 98462,
        google_maps_link: 'https://goo.gl/maps/aqCcy2TKh5TV5MAX8',
        flag: 'https://flagcdn.com/w320/sc.png',
        currencies: [
        {
            'name': 'Seychellois rupee',
            'symbol': '₨'
        }]
    },
    {
        code: 'SYR',
        name:
        {
            fr: "Syrie",
            en: "Syria",
            it: "Siria",
            es: "Siria"
        },
        capital:
        {
            fr: "Damas",
            en: "Damascus",
            it: "Damasco",
            es: "Damasco"
        },
        official_name:
        {
            fr: "République arabe syrienne",
            en: "Syrian Arab Republic",
            it: "Repubblica Araba Siriana",
            es: "República Árabe Siria"
        },
        region: 'Western Asia',
        population: 17500657,
        google_maps_link: 'https://goo.gl/maps/Xe3VnFbwdb4nv2SM9',
        flag: 'https://flagcdn.com/w320/sy.png',
        currencies: [
        {
            'name': 'Syrian pound',
            'symbol': '£'
        }]
    },
    {
        code: 'TCA',
        name:
        {
            fr: "Îles Turques-et-Caïques",
            en: "Turks and Caicos Islands",
            it: "Isole Turks e Caicos",
            es: "Islas Turcas y Caicos"
        },
        capital:
        {
            fr: "Cockburn Town",
            en: "Cockburn Town",
            it: "Cockburn Town",
            es: "Cockburn Town"
        },
        official_name:
        {
            fr: "Îles Turques-et-Caïques",
            en: "Turks and Caicos Islands",
            it: "Isole Turks e Caicos",
            es: "Islas Turcas y Caicos"
        },
        region: 'Caribbean',
        population: 38718,
        google_maps_link: 'https://goo.gl/maps/R8VUDQfwZiFtvmyn8',
        flag: 'https://flagcdn.com/w320/tc.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TCD',
        name:
        {
            fr: "Tchad",
            en: "Chad",
            it: "Ciad",
            es: "Chad"
        },
        capital:
        {
            fr: "N'Djamena",
            en: "N'Djamena",
            it: "N'Djamena",
            es: "Yamena"
        },
        official_name:
        {
            fr: "République du Tchad",
            en: "Republic of Chad",
            it: "Repubblica del Ciad",
            es: "República de Chad"
        },
        region: 'Middle Africa',
        population: 16425859,
        google_maps_link: 'https://goo.gl/maps/ziUdAZ8skuNfx5Hx7',
        flag: 'https://flagcdn.com/w320/td.png',
        currencies: [
        {
            'name': 'Central African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'TGO',
        name:
        {
            fr: "Togo",
            en: "Togo",
            it: "Togo",
            es: "Togo"
        },
        capital:
        {
            fr: "Lomé",
            en: "Lomé",
            it: "Lomé",
            es: "Lomé"
        },
        official_name:
        {
            fr: "République togolaise",
            en: "Togolese Republic",
            it: "Repubblica Togolese",
            es: "República Togolesa"
        },
        region: 'Western Africa',
        population: 8278737,
        google_maps_link: 'https://goo.gl/maps/jzAa9feXuXPrKVb89',
        flag: 'https://flagcdn.com/w320/tg.png',
        currencies: [
        {
            'name': 'West African CFA franc',
            'symbol': 'Fr'
        }]
    },
    {
        code: 'THA',
        name:
        {
            fr: "Thaïlande",
            en: "Thailand",
            it: "Thailandia",
            es: "Tailandia"
        },
        capital:
        {
            fr: "Bangkok",
            en: "Bangkok",
            it: "Bangkok",
            es: "Bangkok"
        },
        official_name:
        {
            fr: "Royaume de Thaïlande",
            en: "Kingdom of Thailand",
            it: "Regno di Thailandia",
            es: "Reino de Tailandia"
        },
        region: 'South-Eastern Asia',
        population: 69799978,
        google_maps_link: 'https://goo.gl/maps/qeU6uqsfW4nCCwzw9',
        flag: 'https://flagcdn.com/w320/th.png',
        currencies: [
        {
            'name': 'Thai baht',
            'symbol': '฿'
        }]
    },
    {
        code: 'TJK',
        name:
        {
            fr: "Tadjikistan",
            en: "Tajikistan",
            it: "Tagikistan",
            es: "Tayikistán"
        },
        capital:
        {
            fr: "Douchanbé",
            en: "Dushanbe",
            it: "Dushanbe",
            es: "Dusambé"
        },
        official_name:
        {
            fr: "République du Tadjikistan",
            en: "Republic of Tajikistan",
            it: "Repubblica del Tagikistan",
            es: "República de Tayikistán"
        },
        region: 'Central Asia',
        population: 9537642,
        google_maps_link: 'https://goo.gl/maps/8rQgW88jEXijhVb58',
        flag: 'https://flagcdn.com/w320/tj.png',
        currencies: [
        {
            'name': 'Tajikistani somoni',
            'symbol': 'ЅМ'
        }]
    },
    {
        code: 'TKL',
        name:
        {
            fr: "Tokelau",
            en: "Tokelau",
            it: "Tokelau",
            es: "Tokelau"
        },
        capital:
        {
            fr: "Tokelau",
            en: "Fakaofo",
            it: "Fakaofo",
            es: "Atafu"
        },
        official_name:
        {
            fr: "Tokelau",
            en: "Tokelau",
            it: "Tokelau",
            es: "Tokelau"
        },
        region: 'Polynesia',
        population: 1411,
        google_maps_link: 'https://goo.gl/maps/Ap5qN8qien6pT9UN6',
        flag: 'https://flagcdn.com/w320/tk.png',
        currencies: [
        {
            'name': 'New Zealand dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TKM',
        name:
        {
            fr: "Turkménistan",
            en: "Turkmenistan",
            it: "Turkmenistan",
            es: "Turkmenistán"
        },
        capital:
        {
            fr: "Achgabat",
            en: "Ashgabat",
            it: "Ashgabat",
            es: "Asjabad"
        },
        official_name:
        {
            fr: "Turkménistan",
            en: "Turkmenistan",
            it: "Repubblica del Turkmenistan",
            es: "República de Turkmenistán"
        },
        region: 'Central Asia',
        population: 6031187,
        google_maps_link: 'https://goo.gl/maps/cgfUcaQHSWKuqeKk9',
        flag: 'https://flagcdn.com/w320/tm.png',
        currencies: [
        {
            'name': 'Turkmenistan manat',
            'symbol': 'm'
        }]
    },
    {
        code: 'TLS',
        name:
        {
            fr: "Timor oriental",
            en: "Timor-Leste",
            it: "Timor Est",
            es: "Timor Oriental"
        },
        capital:
        {
            fr: "Dili",
            en: "Dili",
            it: "Dili",
            es: "Dili"
        },
        official_name:
        {
            fr: "République démocratique de Timor-Leste",
            en: "Democratic Republic of Timor-Leste",
            it: "Repubblica Democratica di Timor Est",
            es: "República Democrática de Timor-Leste"
        },
        region: 'South-Eastern Asia',
        population: 1318442,
        google_maps_link: 'https://goo.gl/maps/sFqBC9zjgUXPR1iTA',
        flag: 'https://flagcdn.com/w320/tl.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TON',
        name:
        {
            fr: "Tonga",
            en: "Tonga",
            it: "Tonga",
            es: "Tonga"
        },
        capital:
        {
            fr: "Nukuʻalofa",
            en: "Nuku'alofa",
            it: "Nukualofa",
            es: "Nukualofa"
        },
        official_name:
        {
            fr: "Royaume des Tonga",
            en: "Kingdom of Tonga",
            it: "Regno di Tonga",
            es: "Reino de Tonga"
        },
        region: 'Polynesia',
        population: 105697,
        google_maps_link: 'https://goo.gl/maps/p5YALBY2QdEzswRo7',
        flag: 'https://flagcdn.com/w320/to.png',
        currencies: [
        {
            'name': 'Tongan paʻanga',
            'symbol': 'T$'
        }]
    },
    {
        code: 'TTO',
        name:
        {
            fr: "Trinité-et-Tobago",
            en: "Trinidad and Tobago",
            it: "Trinidad e Tobago",
            es: "Trinidad y Tobago"
        },
        capital:
        {
            fr: "Port-d'Espagne",
            en: "Port of Spain",
            it: "Port of Spain",
            es: "Puerto España"
        },
        official_name:
        {
            fr: "République de Trinité-et-Tobago",
            en: "Republic of Trinidad and Tobago",
            it: "Repubblica di Trinidad e Tobago",
            es: "República de Trinidad y Tobago"
        },
        region: 'Caribbean',
        population: 1399491,
        google_maps_link: 'https://goo.gl/maps/NrRfDEWoG8FGZqWY7',
        flag: 'https://flagcdn.com/w320/tt.png',
        currencies: [
        {
            'name': 'Trinidad and Tobago dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TUN',
        name:
        {
            fr: "Tunisie",
            en: "Tunisia",
            it: "Tunisia",
            es: "Túnez"
        },
        capital:
        {
            fr: "Tunis",
            en: "Tunis",
            it: "Tunisi",
            es: "Túnez"
        },
        official_name:
        {
            fr: "République tunisienne",
            en: "Tunisian Republic",
            it: "Repubblica Tunisina",
            es: "República Tunecina"
        },
        region: 'Northern Africa',
        population: 11818618,
        google_maps_link: 'https://goo.gl/maps/KgUmpZdUuNRaougs8',
        flag: 'https://flagcdn.com/w320/tn.png',
        currencies: [
        {
            'name': 'Tunisian dinar',
            'symbol': 'د.ت'
        }]
    },
    {
        code: 'TUR',
        name:
        {
            fr: "Turquie",
            en: "Turkey",
            it: "Turchia",
            es: "Turquía"
        },
        capital:
        {
            fr: "Ankara",
            en: "Ankara",
            it: "Ankara",
            es: "Ankara"
        },
        official_name:
        {
            fr: "République de Turquie",
            en: "Republic of Turkey",
            it: "Repubblica di Turchia",
            es: "República de Turquía"
        },
        region: 'Western Asia',
        population: 84339067,
        google_maps_link: 'https://goo.gl/maps/dXFFraiUDfcB6Quk6',
        flag: 'https://flagcdn.com/w320/tr.png',
        currencies: [
        {
            'name': 'Turkish lira',
            'symbol': '₺'
        }]
    },
    {
        code: 'TUV',
        name:
        {
            fr: "Tuvalu",
            en: "Tuvalu",
            it: "Tuvalu",
            es: "Tuvalu"
        },
        capital:
        {
            fr: "Funafuti",
            en: "Funafuti",
            it: "Funafuti",
            es: "Funafuti"
        },
        official_name:
        {
            fr: "Tuvalu",
            en: "Tuvalu",
            it: "Tuvalu",
            es: "Tuvalu"
        },
        region: 'Polynesia',
        population: 11792,
        google_maps_link: 'https://goo.gl/maps/LbuUxtkgm1dfN1Pn6',
        flag: 'https://flagcdn.com/w320/tv.png',
        currencies: [
        {
            'name': 'Australian dollar',
            'symbol': '$'
        },
        {
            'name': 'Tuvaluan dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TWN',
        name:
        {
            fr: "Taïwan",
            en: "Taiwan",
            it: "Taiwan",
            es: "Taiwán"
        },
        capital:
        {
            fr: "Taipei",
            en: "Taipei",
            it: "Taipei",
            es: "Taipéi"
        },
        official_name:
        {
            fr: "République de Chine (Taïwan)",
            en: "Republic of China (Taiwan)",
            it: "Repubblica di Cina (Taiwan)",
            es: "República de China (Taiwán)"
        },
        region: 'Eastern Asia',
        population: 23503349,
        google_maps_link: 'https://goo.gl/maps/HgMKFQjNadF3Wa6B6',
        flag: 'https://flagcdn.com/w320/tw.png',
        currencies: [
        {
            'name': 'New Taiwan dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'TZA',
        name:
        {
            fr: "Tanzanie",
            en: "Tanzania",
            it: "Tanzania",
            es: "Tanzania"
        },
        capital:
        {
            fr: "Dodoma",
            en: "Dodoma",
            it: "Dodoma",
            es: "Dodoma"
        },
        official_name:
        {
            fr: "République unie de Tanzanie",
            en: "United Republic of Tanzania",
            it: "Repubblica Unita di Tanzania",
            es: "República Unida de Tanzania"
        },
        region: 'Eastern Africa',
        population: 59734213,
        google_maps_link: 'https://goo.gl/maps/NWYMqZYXte4zGZ2Q8',
        flag: 'https://flagcdn.com/w320/tz.png',
        currencies: [
        {
            'name': 'Tanzanian shilling',
            'symbol': 'Sh'
        }]
    },
    {
        code: 'UGA',
        name:
        {
            fr: "Ouganda",
            en: "Uganda",
            it: "Uganda",
            es: "Uganda"
        },
        capital:
        {
            fr: "Kampala",
            en: "Kampala",
            it: "Kampala",
            es: "Kampala"
        },
        official_name:
        {
            fr: "République de l'Ouganda",
            en: "Republic of Uganda",
            it: "Repubblica di Uganda",
            es: "República de Uganda"
        },
        region: 'Eastern Africa',
        population: 45741000,
        google_maps_link: 'https://goo.gl/maps/Y7812hFiGa8LD9N68',
        flag: 'https://flagcdn.com/w320/ug.png',
        currencies: [
        {
            'name': 'Ugandan shilling',
            'symbol': 'Sh'
        }]
    },
    {
        code: 'UKR',
        name:
        {
            fr: "Ukraine",
            en: "Ukraine",
            it: "Ucraina",
            es: "Ucrania"
        },
        capital:
        {
            fr: "Kiev",
            en: "Kyiv",
            it: "Kiev",
            es: "Kiev"
        },
        official_name:
        {
            fr: "Ukraine",
            en: "Ukraine",
            it: "Ucraina",
            es: "Ucrania"
        },
        region: 'Eastern Europe',
        population: 44134693,
        google_maps_link: 'https://goo.gl/maps/DvgJMiPJ7aozKFZv7',
        flag: 'https://flagcdn.com/w320/ua.png',
        currencies: [
        {
            'name': 'Ukrainian hryvnia',
            'symbol': '₴'
        }]
    },
    {
        code: 'UMI',
        name:
        {
            fr: "Îles mineures éloignées des États-Unis",
            en: "United States Minor Outlying Islands",
            it: "Isole minori esterne degli Stati Uniti",
            es: "Islas Ultramarinas Menores de Estados Unidos"
        },
        capital:
        {
            fr: "N/A",
            en: "Washington DC",
            it: "Isola di Baker, Howland, Jarvis, Johnston, Kingman, Midway, Palmyra e Wake",
            es: "N/A"
        },
        official_name:
        {
            fr: "Îles mineures éloignées des États-Unis",
            en: "United States Minor Outlying Islands",
            it: "Isole minori esterne degli Stati Uniti",
            es: "Islas Ultramarinas Menores de Estados Unidos"
        },
        region: 'North America',
        population: 300,
        google_maps_link: 'https://goo.gl/maps/hZKnrzgeK69dDyPF8',
        flag: 'https://flagcdn.com/w320/um.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'UNK',
        name:
        {
            fr: "Kosovo",
            en: "Kosovo",
            it: "Kosovo",
            es: "Kosovo"
        },
        capital:
        {
            fr: "Pristina",
            en: "Pristina",
            it: "Pristina",
            es: "Pristina"
        },
        official_name:
        {
            fr: "République du Kosovo",
            en: "Republic of Kosovo",
            it: "Repubblica del Kosovo",
            es: "República de Kosovo"
        },
        region: 'Southeast Europe',
        population: 1775378,
        google_maps_link: 'https://goo.gl/maps/CSC4Yc8SWPgburuD9',
        flag: 'https://flagcdn.com/w320/xk.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'URY',
        name:
        {
            fr: "Uruguay",
            en: "Uruguay",
            it: "Uruguay",
            es: "Uruguay"
        },
        capital:
        {
            fr: "Montevideo",
            en: "Montevideo",
            it: "Montevideo",
            es: "Montevideo"
        },
        official_name:
        {
            fr: "République orientale de l'Uruguay",
            en: "Oriental Republic of Uruguay",
            it: "Repubblica Orientale dell'Uruguay",
            es: "República Oriental del Uruguay"
        },
        region: 'South America',
        population: 3473727,
        google_maps_link: 'https://goo.gl/maps/tiQ9Baekb1jQtDSD9',
        flag: 'https://flagcdn.com/w320/uy.png',
        currencies: [
        {
            'name': 'Uruguayan peso',
            'symbol': '$'
        }]
    },
    {
        code: 'USA',
        name:
        {
            fr: "États-Unis",
            en: "United States",
            it: "Stati Uniti",
            es: "Estados Unidos"
        },
        capital:
        {
            fr: "Washington, D.C.",
            en: "Washington, D.C.",
            it: "Washington",
            es: "Washington, D.C."
        },
        official_name:
        {
            fr: "États-Unis d'Amérique",
            en: "United States of America",
            it: "Stati Uniti d'America",
            es: "Estados Unidos de América"
        },
        region: 'North America',
        population: 329484123,
        google_maps_link: 'https://goo.gl/maps/e8M246zY4BSjkjAv6',
        flag: 'https://flagcdn.com/w320/us.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'UZB',
        name:
        {
            fr: "Ouzbékistan",
            en: "Uzbekistan",
            it: "Uzbekistan",
            es: "Uzbekistán"
        },
        capital:
        {
            fr: "Tachkent",
            en: "Tashkent",
            it: "Tashkent",
            es: "Taskent"
        },
        official_name:
        {
            fr: "République d'Ouzbékistan",
            en: "Republic of Uzbekistan",
            it: "Repubblica dell'Uzbekistan",
            es: "República de Uzbekistán"
        },
        region: 'Central Asia',
        population: 34232050,
        google_maps_link: 'https://goo.gl/maps/AJpo6MjMx23qSWCz8',
        flag: 'https://flagcdn.com/w320/uz.png',
        currencies: [
        {
            'name': 'Uzbekistani soʻm',
            'symbol': "so'm"
        }]
    },
    {
        code: 'VAT',
        name:
        {
            fr: "Cité du Vatican",
            en: "Vatican City",
            it: "Città del Vaticano",
            es: "Ciudad del Vaticano (Santa Sede)"
        },
        capital:
        {
            fr: "Cité du Vatican",
            en: "Vatican City",
            it: "Città del Vaticano",
            es: "Ciudad del Vaticano"
        },
        official_name:
        {
            fr: "Cité du Vatican",
            en: "Vatican City State",
            it: "Città del Vaticano",
            es: "Ciudad del Vaticano (Santa Sede)"
        },
        region: 'Southern Europe',
        population: 451,
        google_maps_link: 'https://goo.gl/maps/DTKvw5Bd1QZaDZmE8',
        flag: 'https://flagcdn.com/w320/va.png',
        currencies: [
        {
            'name': 'Euro',
            'symbol': '€'
        }]
    },
    {
        code: 'VCT',
        name:
        {
            fr: "Saint-Vincent-et-les-Grenadines",
            en: "Saint Vincent and the Grenadines",
            it: "Saint Vincent e Grenadine",
            es: "San Vicente y las Granadinas"
        },
        capital:
        {
            fr: "Kingstown",
            en: "Kingstown",
            it: "Kingstown",
            es: "Kingstown"
        },
        official_name:
        {
            fr: "Saint-Vincent-et-les-Grenadines",
            en: "Saint Vincent and the Grenadines",
            it: "Saint Vincent e Grenadine",
            es: "San Vicente y las Granadinas"
        },
        region: 'Caribbean',
        population: 110947,
        google_maps_link: 'https://goo.gl/maps/wMbnMqjG37FMnrwf7',
        flag: 'https://flagcdn.com/w320/vc.png',
        currencies: [
        {
            'name': 'Eastern Caribbean dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'VEN',
        name:
        {
            fr: "Venezuela",
            en: "Venezuela",
            it: "Venezuela",
            es: "Venezuela"
        },
        capital:
        {
            fr: "Caracas",
            en: "Caracas",
            it: "Caracas",
            es: "Caracas"
        },
        official_name:
        {
            fr: "République bolivarienne du Venezuela",
            en: "Bolivarian Republic of Venezuela",
            it: "Repubblica Bolivariana del Venezuela",
            es: "República Bolivariana de Venezuela"
        },
        region: 'South America',
        population: 28435943,
        google_maps_link: 'https://goo.gl/maps/KLCwDN8sec7z2kse9',
        flag: 'https://flagcdn.com/w320/ve.png',
        currencies: [
        {
            'name': 'Venezuelan bolívar soberano',
            'symbol': 'Bs.S.'
        }]
    },
    {
        code: 'VGB',
        name:
        {
            fr: "Îles Vierges britanniques",
            en: "British Virgin Islands",
            it: "Isole Vergini Britanniche",
            es: "Islas Vírgenes Británicas"
        },
        capital:
        {
            fr: "Road Town",
            en: "Road Town",
            it: "Road Town",
            es: "Road Town"
        },
        official_name:
        {
            fr: "Îles Vierges britanniques",
            en: "Virgin Islands",
            it: "Isole Vergini Britanniche",
            es: "Islas Vírgenes Británicas"
        },
        region: 'Caribbean',
        population: 30237,
        google_maps_link: 'https://goo.gl/maps/49C9cSesNVAR9DQk8',
        flag: 'https://flagcdn.com/w320/vg.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'VIR',
        name:
        {
            fr: "Îles Vierges des États-Unis",
            en: "United States Virgin Islands",
            it: "Isole Vergini Americane",
            es: "Islas Vírgenes de los Estados Unidos"
        },
        capital:
        {
            fr: "Charlotte Amalie",
            en: "Charlotte Amalie",
            it: "Charlotte Amalie",
            es: "Charlotte Amalie"
        },
        official_name:
        {
            fr: "Îles Vierges des États-Unis",
            en: "Virgin Islands of the United States",
            it: "Isole Vergini Americane",
            es: "Islas Vírgenes de los Estados Unidos"
        },
        region: 'Caribbean',
        population: 106290,
        google_maps_link: 'https://goo.gl/maps/mBfreywj8dor6q4m9',
        flag: 'https://flagcdn.com/w320/vi.png',
        currencies: [
        {
            'name': 'United States dollar',
            'symbol': '$'
        }]
    },
    {
        code: 'VNM',
        name:
        {
            fr: "Viêt Nam",
            en: "Vietnam",
            it: "Vietnam",
            es: "Vietnam"
        },
        capital:
        {
            fr: "Hanoï",
            en: "Hanoi",
            it: "Hanoi",
            es: "Hanói"
        },
        official_name:
        {
            fr: "République socialiste du Viêt Nam",
            en: "Socialist Republic of Vietnam",
            it: "Repubblica Socialista del Vietnam",
            es: "República Socialista de Vietnam"
        },
        region: 'South-Eastern Asia',
        population: 97338583,
        google_maps_link: 'https://goo.gl/maps/PCpVt9WzdJ9A9nEZ9',
        flag: 'https://flagcdn.com/w320/vn.png',
        currencies: [
        {
            'name': 'Vietnamese đồng',
            'symbol': '₫'
        }]
    },
    {
        code: 'VUT',
        name:
        {
            fr: "Vanuatu",
            en: "Vanuatu",
            it: "Vanuatu",
            es: "Vanuatu"
        },
        capital:
        {
            fr: "Port-Vila",
            en: "Port Vila",
            it: "Port Vila",
            es: "Port Vila"
        },
        official_name:
        {
            fr: "République de Vanuatu",
            en: "Republic of Vanuatu",
            it: "Repubblica di Vanuatu",
            es: "República de Vanuatu"
        },
        region: 'Melanesia',
        population: 307150,
        google_maps_link: 'https://goo.gl/maps/hwAjehcT7VfvP5zJ8',
        flag: 'https://flagcdn.com/w320/vu.png',
        currencies: [
        {
            'name': 'Vanuatu vatu',
            'symbol': 'Vt'
        }]
    },
    {
        code: 'WLF',
        name:
        {
            fr: "Wallis-et-Futuna",
            en: "Wallis and Futuna",
            it: "Wallis e Futuna",
            es: "Wallis y Futuna"
        },
        capital:
        {
            fr: "Mata-Utu",
            en: "Mata-Utu",
            it: "Mata-Utu",
            es: "Mata Utu"
        },
        official_name:
        {
            fr: "Territoire des îles Wallis-et-Futuna",
            en: "Territory of the Wallis and Futuna Islands",
            it: "Wallis e Futuna",
            es: "Territorio de las Islas Wallis y Futuna"
        },
        region: 'Polynesia',
        population: 11750,
        google_maps_link: 'https://goo.gl/maps/CzVqK74QYtbHv65r5',
        flag: 'https://flagcdn.com/w320/wf.png',
        currencies: [
        {
            'name': 'CFP franc',
            'symbol': '₣'
        }]
    },
    {
        code: 'WSM',
        name:
        {
            fr: "Samoa",
            en: "Samoa",
            it: "Samoa",
            es: "Samoa"
        },
        capital:
        {
            fr: "Apia",
            en: "Apia",
            it: "Apia",
            es: "Apia"
        },
        official_name:
        {
            fr: "État indépendant des Samoa",
            en: "Independent State of Samoa",
            it: "Stato Indipendente di Samoa",
            es: "Estado Independiente de Samoa"
        },
        region: 'Polynesia',
        population: 198410,
        google_maps_link: 'https://goo.gl/maps/CFC9fEFP9cfkYUBF9',
        flag: 'https://flagcdn.com/w320/ws.png',
        currencies: [
        {
            'name': 'Samoan tālā',
            'symbol': 'T'
        }]
    },
    {
        code: 'YEM',
        name:
        {
            fr: "Yémen",
            en: "Yemen",
            it: "Yemen",
            es: "Yemen"
        },
        capital:
        {
            fr: "Sanaa",
            en: "Sana'a",
            it: "Sanaa",
            es: "Saná"
        },
        official_name:
        {
            fr: "République du Yémen",
            en: "Republic of Yemen",
            it: "Repubblica dello Yemen",
            es: "República de Yemen"
        },
        region: 'Western Asia',
        population: 29825968,
        google_maps_link: 'https://goo.gl/maps/WCmE76HKcLideQQw7',
        flag: 'https://flagcdn.com/w320/ye.png',
        currencies: [
        {
            'name': 'Yemeni rial',
            'symbol': '﷼'
        }]
    },
    {
        code: 'ZAF',
        name:
        {
            fr: "Afrique du Sud",
            en: "South Africa",
            it: "Sud Africa",
            es: "Sudáfrica"
        },
        capital:
        {
            fr: "Pretoria, Le Cap, Bloemfontein",
            en: "Pretoria",
            it: "Maseru",
            es: "Pretoria"
        },
        official_name:
        {
            fr: "République d'Afrique du Sud",
            en: "Republic of South Africa",
            it: "Repubblica del Sud Africa",
            es: "República de Sudáfrica"
        },
        region: 'Southern Africa',
        population: 59308690,
        google_maps_link: 'https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6',
        flag: 'https://flagcdn.com/w320/za.png',
        currencies: [
        {
            'name': 'South African rand',
            'symbol': 'R'
        }]
    },
    {
        code: 'ZMB',
        name:
        {
            fr: "Zambie",
            en: "Zambia",
            it: "Zambia",
            es: "Zambia"
        },
        capital:
        {
            fr: "Lusaka",
            en: "Lusaka",
            it: "Lusaka",
            es: "Lusaka"
        },
        official_name:
        {
            fr: "République de Zambie",
            en: "Republic of Zambia",
            it: "Repubblica di Zambia",
            es: "República de Zambia"
        },
        region: 'Eastern Africa',
        population: 18383956,
        google_maps_link: 'https://goo.gl/maps/mweBcqvW8TppZW6q9',
        flag: 'https://flagcdn.com/w320/zm.png',
        currencies: [
        {
            'name': 'Zambian kwacha',
            'symbol': 'ZK'
        }]
    },
    {
        code: 'ZWE',
        name:
        {
            fr: "Zimbabwe",
            en: "Zimbabwe",
            it: "Zimbabwe",
            es: "Zimbabue"
        },
        capital:
        {
            fr: "Harare",
            en: "Harare",
            it: "Harare",
            es: "Harare"
        },
        official_name:
        {
            fr: "République du Zimbabwe",
            en: "Republic of Zimbabwe",
            it: "Repubblica dello Zimbabwe",
            es: "República de Zimbabue"
        },
        region: 'Southern Africa',
        population: 14862927,
        google_maps_link: 'https://goo.gl/maps/M26BqdwQctqxXS65A',
        flag: 'https://flagcdn.com/w320/zw.png',
        currencies: [
        {
            'name': 'Zimbabwean dollar',
            'symbol': '$'
        }]
    }
];

