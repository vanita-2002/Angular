import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';



const routes : Routes=[{path:'students',component:StudentListComponent},

{path:'products',component:ProductListComponent},
{path:'employees',component:EmployeeComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})






export class AppRoutingModule { }

// ng g m app-routing--flat se module nhi banta without module file banta hai sirf  mera routing ka info kaunse module se aana chahiye it needs to knoww
// routing module banaya
// app module me import
// ng new app
// -name
// --
// rou
// ting






















