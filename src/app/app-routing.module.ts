import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayReportComponent } from './pages/display-report/display-report.component';
import { GeneratereportComponent } from './pages/reportGeneration/generatereport/generatereport.component';

const routes: Routes = [
  {path:"", component: GeneratereportComponent},
  {path: "displayReport", component: DisplayReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
