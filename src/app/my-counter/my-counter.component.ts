import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterFacade } from './+state/counter.facade';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  standalone: false,
})
export class MyCounterComponent {
  count$: Observable<number>;

  countryNames$: Observable<Array<string>>;

  constructor(private counterFacade: CounterFacade) {
    this.count$ = this.counterFacade.count$;
    this.countryNames$ = this.counterFacade.countrieNames$;
  }

  increment() {
    this.counterFacade.increment();
  }

  decrement() {
    this.counterFacade.decrement();
  }

  reset() {
    this.counterFacade.reset();
  }

  getCountries() {
    this.counterFacade.getCountries();
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
