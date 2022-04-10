import { Component, OnInit } from '@angular/core';
import { Institute } from '../Institutes';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-add-institutes',
  templateUrl: './add-institutes.component.html',
  styleUrls: ['./add-institutes.component.css']
})
export class AddInstitutesComponent implements OnInit {

  service: MainServiceService;
  i : Institute;
  iid : number = 0;
  iname : string = '';
  constructor(service : MainServiceService) {
    this.service = service;
    this.i = new Institute(this.iid, this.iname);
   }


  ngOnInit(): void {
  }

  getInsDetails(iid:number, iname:string)
  {
    this.iid = iid;
    this.iname = iname;
    this.i = new Institute(iid, iname);
    this.service.addIns(this.i).subscribe();
  }
}
