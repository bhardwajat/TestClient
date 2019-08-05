import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  employeeList = [];

  constructor(private employeeService: EmployeeService) {
    this.getEmployees();
  }
  
  getEmployees(){
    this.employeeService.getEmployees().subscribe(data => this.employeeList = data);
  }

}
