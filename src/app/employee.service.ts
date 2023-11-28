import { Injectable } from "@angular/core";
import { Employee } from "./employee";

@Injectable({
	providedIn: "root",
})
export class EmployeeService {
	private baseUrl = "http://localhost:3000/employees";

	async fetchAllEmployees() {
		const response = await fetch(this.baseUrl);
		const data = (await response.json()) as Employee[];
		return data;
	}

	async searchEmployees(name: string, department: string) {
		const url = new URL(this.baseUrl);
		if (name) url.searchParams.set("name", name);
		if (department) url.searchParams.set("department", department);
		const response = await fetch(url.toString());
		const data = (await response.json()) as Employee[];
		return data;
	}
}
