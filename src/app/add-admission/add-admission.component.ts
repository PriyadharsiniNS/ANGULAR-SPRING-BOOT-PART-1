import { Component, OnInit } from '@angular/core';
import { Admission } from '../Admissions';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-add-admission',
  templateUrl: './add-admission.component.html',
  styleUrls: ['./add-admission.component.css']
})
export class AddAdmissionComponent implements OnInit {

  service : MainServiceService;
  aid:number=0;
  aname:string='';
  a:Admission;
  constructor(service : MainServiceService) { 
    this.service = service;
    this.a = new Admission(this.aid, this.aname);
  }

  ngOnInit(): void {
  }
  
  getAdmissionDetails(aid:number, aname:string)
  {
    this.aid = aid;
    this.aname = aname;
    this.a = new Admission(this.aid, this.aname);
    this.service.addAdm(this.a).subscribe();
  }
}
