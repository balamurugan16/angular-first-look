import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
export const routeConfig: Routes = [
	{
		path: "",
		component: HomeComponent,
		title: "Home page",
	},

	{
		path: "details/:id",
		component: DetailsComponent,
		title: "Home Details",
	},
];
