import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of } from 'rxjs';
import { CounterService } from './counter.service';
import * as CounterActions from './counter.actions';
import { Country } from './country.models';

@Injectable()
export class CounterEffects {
  public getUserHasFomContractrs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.getCountries),
      switchMap(() =>
        this.counterService.getCountries().pipe(
          map((countries: Array<Country>) =>
            CounterActions.getCountriesSuccess({
              countries,
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(CounterActions.getCountriesError({ error }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}
}
