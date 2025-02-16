export interface AutocompleteType {
  id: string;
  type: string;
  code: string;
  name: string;
  country_code: string;
  country_name: string;
  state_code: any;
  coordinates: Coordinates;
  index_strings: any[];
  weight: number;
  cases?: Cases;
  country_cases: CountryCases;
  main_airport_name?: string;
  city_code?: string;
  city_name?: string;
  city_cases?: CityCases;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Cases {
  vi: string;
  tv: string;
  su: string;
  ro: string;
  pr: string;
  da: string;
}

export interface CountryCases {
  vi: string;
  tv: string;
  su: string;
  ro: string;
  pr: string;
  da: string;
}

export interface CityCases {
  vi: string;
  tv: string;
  su: string;
  ro: string;
  pr: string;
  da: string;
}
