import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';
import { COUNTER_KEY } from './counter.reducer';
import { Country } from './country.models';

const counterState = createFeatureSelector<CounterState>(COUNTER_KEY);
export const selectCount = createSelector(
  counterState,
  (state: CounterState) => state.count
);
/** To showcase flows related to retrieval of data */
export const selectCountryNames = createSelector(
  counterState,
  (state: CounterState) =>
    state.countries.map((country: Country) => country.name).sort()
);
