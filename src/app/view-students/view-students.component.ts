import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Student } from '../Students';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  service : MainServiceService;
  students : Student[] = [];
  constructor(service : MainServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getAllStu().subscribe((data)=>(this.students = data));
  }

}
