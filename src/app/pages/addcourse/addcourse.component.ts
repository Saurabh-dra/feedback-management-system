import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/models/course-models';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  addCourseForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;
  form: any = {};
  errorMessage = '';
  errors=null;
  result: CourseModel;
  model:CourseModel;

  constructor(    
    private fb: FormBuilder,
    private router: Router,
    private courseService: CourseServiceService) { }

  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      courseId:['',[Validators.required, Validators.pattern(/^[0-9]+$/)]],
      courseName:['',[Validators.required,Validators.pattern(/^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$/)]]
    });
  }

  get f() {
    return this.addCourseForm.controls;
  }

  onSubmit() {
    this.model=this.addCourseForm.value;
    console.log(this.model);
    this.submitted = true;
    this.courseService.addCourses(this.model).subscribe(data => {
      this.result=data;
      alert("Course Added Succesfully")
  },(error => {
    alert(error.toString())
  }))

}
  
  onReset() {
    this.submitted = false;
    this.addCourseForm.reset();
  }

}
