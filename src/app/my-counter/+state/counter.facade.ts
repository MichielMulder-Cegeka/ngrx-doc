import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from './counter.actions';
import * as CounterSelectors from './counter.selectors';

@Injectable()
export class CounterFacade {
  public count$: Observable<number>;

  public countrieNames$: Observable<Array<string>>;

  constructor(private store: Store) {
    this.count$ = this.store.select(CounterSelectors.selectCount);
    this.countrieNames$ = this.store.select(
      CounterSelectors.selectCountryNames
    );
  }

  public increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  public decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }

  public reset(): void {
    this.store.dispatch(CounterActions.reset());
  }

  /** To showcase flows related to retrieval of data */
  public getCountries(): void {
    this.store.dispatch(CounterActions.getCountries());
  }
}
