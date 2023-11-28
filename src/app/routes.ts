import { EmployeePageComponent } from "./employee-page/employee-page.component";
import { Routes } from "@angular/router";

export const routeConfig: Routes = [
	{
		path: "",
		component: EmployeePageComponent,
		title: "Employees",
	},
];
