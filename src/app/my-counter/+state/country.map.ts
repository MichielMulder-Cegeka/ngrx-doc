import { Country, CountryDTO } from './country.models';

export function transformCountries(
  countriesDto: Array<CountryDTO>
): Array<Country> {
  const countries: Array<Country> = [];
  for (let countryDto of countriesDto) {
    const country: Country = {
      name: countryDto.name.common || '',
    };
    countries.push(country);
  }
  return countries;
}
