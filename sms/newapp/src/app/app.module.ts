import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeComponent } from 'src/app/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    ViewStudentComponent,
    ProductListComponent,
    ProductDetailsComponent,
    EmployeeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
