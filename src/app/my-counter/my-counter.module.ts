import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MyCounterComponent } from './my-counter.component';
import { COUNTER_KEY } from './+state/counter.reducer';
import { counterReducer } from './+state/counter.reducer';
import { CounterFacade } from './+state/counter.facade';
import { CounterEffects } from './+state/counter.effects';
import { CounterService } from './+state/counter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MyCounterComponent],
  exports: [MyCounterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([CounterEffects]),
    StoreModule.forFeature(COUNTER_KEY, counterReducer),
  ],
  providers: [CounterFacade, CounterService],
})
export class CounterModule {}
