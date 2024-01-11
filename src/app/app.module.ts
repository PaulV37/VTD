import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VtmTabComponent } from './vtm-tab/vtm-tab.component';
import { VtmNavComponent } from './vtm-nav/vtm-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VtmTabComponent,
    VtmNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
