import { Component, OnInit } from '@angular/core';
import { Admission } from '../Admissions';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-edit-admission',
  templateUrl: './edit-admission.component.html',
  styleUrls: ['./edit-admission.component.css']
})
export class EditAdmissionComponent implements OnInit {

  service : MainServiceService;
  aid :  number = 0;
  aname : string = '';
  a : Admission;
  constructor(service : MainServiceService) { 
    this.service = service;
    this.a = new Admission(this.aid, this.aname);
  }

  ngOnInit(): void {
  }

  editAdmissionDetails(aid : number, aname : string)
  {
    this.aid = aid;
    this.aname = aname;
    this.a = new Admission(this.aid, this.aname);
    this.service.editAdm(this.a).subscribe();
  }

}
