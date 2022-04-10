import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Student } from '../Students';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  service:MainServiceService;
  sid:number=0;
  sname:string='';
  s:Student;
  constructor(service:MainServiceService) { 
    this.service = service;
    this.s = new Student(this.sid,this.sname);
  }

  ngOnInit(): void {
  }

  getStudentDetails(sid:number, sname:string)
  {
    this.sid = sid;
    this.sname = sname;
    this.s = new Student(this.sid, this.sname);
    this.service.addStu(this.s).subscribe();
  }
}
