import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports:[
    SidenavComponent

  ]
})
export class SharedModule { }
