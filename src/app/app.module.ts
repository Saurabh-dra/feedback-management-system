import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { GeneratereportComponent } from './pages/reportGeneration/generatereport/generatereport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from  './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DisplayReportComponent } from './pages/display-report/display-report.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneratereportComponent,
    DisplayReportComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
