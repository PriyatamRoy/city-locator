import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../model/City';

@Pipe({  
    name: 'cityfilter'
})
export class CityFilterPipe implements PipeTransform {

	transform(items: City[], filter: string): any[] {
		
		if(!filter) {
			return items;
		}

		return items.filter(item => item.countryId === filter);

	}
}