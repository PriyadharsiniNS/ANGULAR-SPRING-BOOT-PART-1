import { Component, OnInit } from '@angular/core';
import { Institute } from '../Institutes';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-edit-institutes',
  templateUrl: './edit-institutes.component.html',
  styleUrls: ['./edit-institutes.component.css']
})
export class EditInstitutesComponent implements OnInit {

  service : MainServiceService;
  iid : number = 0;
  iname : string = '';
  i : Institute;
  constructor(service : MainServiceService) { 
    this.service = service;
    this.i = new Institute(this.iid,this.iname);
  }

  ngOnInit(): void {
  }

  editInsDetails(iid:number, iname:string)
  {
    this.iid = iid;
    this.iname = iname;
    this.i = new Institute(iid,iname);
    this.service.editIns(this.i).subscribe();
  }

}
