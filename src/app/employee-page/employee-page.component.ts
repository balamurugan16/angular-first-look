import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { AfterViewInit, Component, inject, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
@Component({
	selector: "app-employee-page",
	standalone: true,
	imports: [
		FormsModule,
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	templateUrl: "./employee-page.component.html",
	styleUrls: ["./employee-page.component.css"],
})
export class EmployeePageComponent implements OnInit {
	employeeName = "";
	department = "";
	employeeService: EmployeeService;
	employees: Employee[] = [];
	displayedColumns: string[];
	dataSource = new MatTableDataSource<Employee>(this.employees);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor() {
		this.employeeService = inject(EmployeeService);
		this.employees = [];
		this.displayedColumns = ["id", "name", "department", "designation"];
	}

	async ngOnInit() {
		this.employees = await this.employeeService.fetchAllEmployees();
		this.dataSource.data = this.employees;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
	}
	async fetchEmployees() {
		this.employees = await this.employeeService.fetchAllEmployees();
	}

	async searchEmployees() {
		this.employees = await this.employeeService.searchEmployees(
			this.employeeName,
			this.department,
		);
	}
}
