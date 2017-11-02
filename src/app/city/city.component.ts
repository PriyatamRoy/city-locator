import { Component, OnInit, Input } from '@angular/core';
import { City } from '../model/City';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityList: City[] = [];
  cities;

  @Input() country: string;

  constructor() { }

  ngOnInit() {

  	this.cities = [
  		{'countryId':'IN', 'name':'Bangalore', 'lat':12.972442 , 'lon':77.580643},
  		{'countryId':'IN', 'name':'Hyderabad', 'lat':17.387140, 'lon':78.491684},
  		{'countryId':'IN', 'name':'Chennai', 'lat':13.067439 , 'lon':80.237617},
  		{'countryId':'IN', 'name':'Mumbai', 'lat':19.0728300 , 'lon':72.8826100},
  		{'countryId':'JP', 'name':'Tokyo', 'lat':35.652832 , 'lon':139.839478},
  		{'countryId':'JP', 'name':'Osaka', 'lat':34.69374, 'lon':135.50218},
  		{'countryId':'OM', 'name':'Muscat', 'lat':23.614328 , 'lon':58.545284},
  		{'countryId':'OM', 'name':'Saham', 'lat':24.172222 , 'lon':56.888611},
  		{'countryId':'QA', 'name':'Doha', 'lat':25.286106 , 'lon':51.534817},
  		{'countryId':'QA', 'name':'Al Kiranah', 'lat':25.0109891 , 'lon':51.0352278},
  		{'countryId':'SG', 'name':'Tampines', 'lat':1.3451042 , 'lon':103.9200073},
  		{'countryId':'SG', 'name':'Novena', 'lat':1.3261354 , 'lon':103.8203441}
  	];

  	for(var i = 0 ; i < this.cities.length ; i++) {
  		this.cityList.push(new City(this.cities[i].countryId, this.cities[i].name, this.cities[i].lat, this.cities[i].lon));
  	} 

  	
  }

}
