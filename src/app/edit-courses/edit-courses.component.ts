import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {

  cid:number=0;
  cname:string='';
  service:MainServiceService;
  c:Course;
  constructor(service:MainServiceService) {
    this.service = service;
    this.c = new Course(this.cid, this.cname);
   }

  ngOnInit(): void {
  }

  editCourseDetails(cid:number, cname: string)
  {
    this.cid = cid;
    this.cname = cname;
    this.c = new Course(cid,cname);
    this.service.editCourses(this.c).subscribe();
  }
}
