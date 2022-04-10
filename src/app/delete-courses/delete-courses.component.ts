import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-delete-courses',
  templateUrl: './delete-courses.component.html',
  styleUrls: ['./delete-courses.component.css']
})
export class DeleteCoursesComponent implements OnInit {

  cid:number=0;
  service:MainServiceService;
  constructor(service:MainServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
  }
  deleteCourseDetails(cid : number)
  {
    this.cid = cid;
    this.service.deleteCourses(this.cid).subscribe();
  }
}
