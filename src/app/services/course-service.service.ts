import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from '../models/course-models';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private baseUrl='';

  constructor(private http:HttpClient) {
    this.baseUrl='http://localhost:7001/courses';
  }

  addCourses(courseModel:CourseModel): Observable<CourseModel>{
    return this.http.post<CourseModel>(this.baseUrl+'/addCourse',courseModel)
  }

  getCoursesList():Observable<any>{
    return this.http.get(`${this.baseUrl}/getall`);
  }
  deleteCourse(courseId:number):Observable<any>{
  //   return this.http.delete(this.baseUrl+'/${courseId}');
  return this.http.delete(`${this.baseUrl}/${courseId}`, {responseType: 'text'});
  // }
  }

}
