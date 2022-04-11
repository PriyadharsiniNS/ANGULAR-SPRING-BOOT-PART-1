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
  instituteId : number = 0;
  instituteName : string = '';
  instituteDescription : string = '';
  instituteAddress : string = '';
  mobile : string = '';
  email : string = '';
  constructor(service : MainServiceService) {
    this.service = service;
    this.i = new Institute(this.instituteId,this.instituteName,
      this.instituteDescription, this.instituteAddress,
      this.mobile, this.email);
   }


  ngOnInit(): void {
  }

  getInsDetails(instituteId : number,instituteName : string,
    instituteDescription : string,instituteAddress : string,
    mobile : string,email : string)
  {
        this.instituteId = instituteId;
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.mobile = mobile;
        this.email = email;
        this.i = new Institute(this.instituteId,this.instituteName,
        this.instituteDescription, this.instituteAddress,
        this.mobile, this.email);
        this.service.addIns(this.i).subscribe();
  }
}
