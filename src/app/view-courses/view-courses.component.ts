import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  service : MainServiceService;
  courses : Course[] = [];
  constructor(service : MainServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getAllCourses().subscribe((data)=>this.courses=data);
  }

}
