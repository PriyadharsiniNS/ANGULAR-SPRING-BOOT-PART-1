import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  service : MainServiceService;
  c : Course;
  cid:number = 0;
  cname : string = '';
  constructor(service : MainServiceService) {
    this.service = service;
    this.c = new Course(this.cid, this.cname);
   }

  ngOnInit(): void {}

  getCourseDetails(cid:number, cname: string)
  {
    this.cid  = cid;
    this.cname = cname;
    this.c = new Course(this.cid, this.cname);
    this.service.addCourses(this.c).subscribe();
  }

}
