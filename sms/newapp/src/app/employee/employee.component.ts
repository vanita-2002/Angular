import { Component, OnInit } from '@angular/core';
import { mockService } from 'src/app/mock.service';
import {mock } from '../shared/interfaces/employee.interface';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees !:mock[]
  constructor(private mockService: mockService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails():void{
    this.employees = this.mockService.fetchEmployees();
  }
}
