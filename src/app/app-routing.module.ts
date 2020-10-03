import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './pages/addcourse/addcourse.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';

const routes: Routes = [  { 
  path: '', component: HomeComponent, pathMatch: "full" },
{ path:"courses/add-courses", component: AddcourseComponent },
{ path:"courses/view-courses", component: ViewCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
