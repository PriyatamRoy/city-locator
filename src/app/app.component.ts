import { Component } from '@angular/core';
import { City } from './model/City';
import { Coordinate } from './model/Coordinate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedCountry: string;
  selectedCity: string = "Orlando";
  coordinate: Coordinate = new Coordinate(28.4810971, -81.5088371);

  onCountrySelected(countryId: string) {
  	this.selectedCountry = countryId;
  }

  onCitySelected(city: City) {
  	this.selectedCity = city.name;
  	this.coordinate.lat = city.lat;
  	this.coordinate.lon = city.lon;
  }
}
