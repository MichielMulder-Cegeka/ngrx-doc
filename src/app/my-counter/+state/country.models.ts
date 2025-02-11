export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {}

export interface Shp {
  name: string;
  symbol: string;
}

export interface Currencies {
  SHP: Shp;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Demonyms {
  eng: Eng;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  [lang: string]: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface NativeName {
  eng: Translation;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface Translation {
  official: string;
  common: string;
}

/**
 * The CountryDTO is an example model which looks too bloated for what we want to use it
 * in our front-end.
 * Let's create a simpler Country model below.
 */
export interface CountryDTO {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

/** All we wanted was the countries' names, jeez louis */
export interface Country {
  /** Commonly used name of the country */
  name: string;
}
