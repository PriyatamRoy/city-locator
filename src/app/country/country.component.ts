import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Country } from '../model/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryList: Country[] = [];
  countries;
  selectedCountry: string;

  @Output() countrySelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  	this.countries = [
  		{'id':'IN', 'name':'India'},
  		{'id':'JP', 'name':'Japan'},
  		{'id':'OM', 'name':'Oman'},
  		{'id':'QA', 'name':'Qatar'},
  		{'id':'SG', 'name':'Singapore'}
  	];

  	for(var i = 0 ; i < this.countries.length ; i++) {
  		this.countryList.push(new Country(this.countries[i].id, this.countries[i].name));
  	} 

  }

  onCountrySelected() {
    this.countrySelected.emit(this.selectedCountry);
  }

}
