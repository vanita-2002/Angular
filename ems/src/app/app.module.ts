import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViniComponent } from './vini/vini.component';
import { VaniComponent } from './vani/vani.component';

@NgModule({
  declarations: [
    AppComponent,
    ViniComponent,
    VaniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
