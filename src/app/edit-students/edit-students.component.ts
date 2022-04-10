import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Student } from '../Students';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {

  service : MainServiceService;
  sid:number=0;
  sname:string='';
  s:Student;
  constructor(service : MainServiceService) { 
    this.service = service;
    this.s = new Student(this.sid, this.sname);
  }

  ngOnInit(): void {
  }

  editStuDetails(sid : number, sname : string)
  {
    this.sid = sid;
    this.sname = sname;
    this.s = new Student(this.sid, this.sname);
    this.service.editStu(this.s).subscribe();
  }

}
