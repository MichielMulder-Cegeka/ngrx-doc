import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  getCountriesSuccess,
} from './counter.actions';
import { CounterState } from './counter.state';
export const COUNTER_KEY = 'counterReducer';

export const initialState: CounterState = {
  count: 0,
  countries: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(getCountriesSuccess, (state, { countries }) => ({
    ...state,
    count: countries?.length || state.count,
    countries,
  })),
  on(reset, () => initialState)
);
