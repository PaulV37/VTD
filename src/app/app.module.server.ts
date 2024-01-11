import { NgModule, LOCALE_ID } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
