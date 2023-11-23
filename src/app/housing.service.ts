import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
	providedIn: "root",
})
export class HousingService {
	url = "http://localhost:3000/locations";

	constructor() {}

	async getAllHousingLocations(): Promise<HousingLocation[]> {
		const response = await fetch(this.url);
		const data = (await response.json()) as HousingLocation[];
		return data ?? [];
	}

	async getHousingLocationsById(
		id: number,
	): Promise<HousingLocation | undefined> {
		const response = await fetch(`${this.url}/${id}`);
		const data = (await response.json()) as HousingLocation;
		return data ?? [];
	}

	submitApplication(firstName: string, lastName: string, email: string) {
		console.log(
			`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
		);
	}
}
