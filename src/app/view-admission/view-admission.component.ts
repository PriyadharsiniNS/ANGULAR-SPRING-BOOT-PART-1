import { Component, OnInit } from '@angular/core';
import { Admission } from '../Admissions';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-view-admission',
  templateUrl: './view-admission.component.html',
  styleUrls: ['./view-admission.component.css']
})
export class ViewAdmissionComponent implements OnInit {

  service:MainServiceService;
  aid:number=0;
  aname:string='';
  admin:Admission[]=[];
  constructor(service:MainServiceService) { 
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getAllAdm().subscribe((data)=>(this.admin=data));
  }

}
