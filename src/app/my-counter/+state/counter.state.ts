import { Country } from './country.models';

export interface CounterState {
  count: number;
  /** To showcase flows related to retrieval of data */
  countries: Array<Country>;
}
