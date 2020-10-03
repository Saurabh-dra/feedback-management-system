import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/models/course-models';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
  courseList:Observable<CourseModel[]>;
   constructor( private courseService:CourseServiceService) { }
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.courseService.getCoursesList().subscribe(
      data=>{
        console.log(data);
        this.courseList=data;

      },
      error=>{console.log(error);}
    );
    console.log(this.courseList);
    return this.courseList;
  }

  deleteCourse(id:number){
    console.log(id);
    this.courseService.deleteCourse(id).subscribe(
      data=>{
      
        console.log(data);
        this.loadData();
      },
      error=>{
        console.error(error);
      }
    )
      window.location.reload();
  }
}
