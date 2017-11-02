import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { CityFilterPipe } from './utilities/city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
