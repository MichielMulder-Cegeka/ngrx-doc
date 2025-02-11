import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { transformCountries } from './country.map';
import { Country, CountryDTO } from './country.models';

const apiUrl: string = 'https://restcountries.com/v3.1';
@Injectable()
export class CounterService {
  constructor(private http: HttpClient) {}

  public getCountries(): Observable<Array<Country>> {
    return this.http
      .get<Array<CountryDTO>>(`${apiUrl}/all`)
      .pipe(map(transformCountries));
  }
}
