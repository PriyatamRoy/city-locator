export class City {
	countryId: string;
	name: string;
	lat: number;
	lon: number;

	constructor(countryId, name, lat, lon) {
		this.countryId = countryId;
		this.name = name;
		this.lat = lat;
		this.lon = lon;
	}
}