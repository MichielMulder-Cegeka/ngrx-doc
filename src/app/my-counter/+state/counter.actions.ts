import { createAction, props } from '@ngrx/store';
import { Country } from './country.models';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

/** To showcase flows related to retrieval of data */
export const getCountries = createAction(
  '[Counter Component] Get Countries start'
);
/** To showcase flows related to retrieval of data */
export const getCountriesSuccess = createAction(
  '[Counter Component] Get Countries success',
  props<{ countries: Array<Country> }>()
);
/** To showcase flows related to retrieval of data */
export const getCountriesError = createAction(
  '[Counter Component] Get Countries error',
  props<{ error: Error }>()
);
