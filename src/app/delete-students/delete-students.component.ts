import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent implements OnInit {

  sid:number=0;
  service:MainServiceService;

  constructor( service:MainServiceService) { 
    this.service = service;
  }

  ngOnInit(): void {
  }

  deleteStuDetails(sid:number)
  {
    this.sid = sid;
    this.service.deleteStu(this.sid).subscribe();
  }
}
