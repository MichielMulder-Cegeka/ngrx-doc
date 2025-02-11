import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CounterModule } from './my-counter/my-counter.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CounterModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
