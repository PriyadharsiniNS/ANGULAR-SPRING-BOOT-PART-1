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
  instituteId : number = 0;
  instituteName : string = '';
  instituteDescription : string = '';
  instituteAddress : string = '';
  mobile : string = '';
  email : string = '';
  i : Institute;
  constructor(service : MainServiceService) { 
    this.service = service;
    this.i = new Institute(this.instituteId,this.instituteName,
                          this.instituteDescription, this.instituteAddress,
                          this.mobile, this.email);
  }

  ngOnInit(): void {
  }

  editInsDetails(instituteId : number,instituteName : string,
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
    this.service.editIns(this.i).subscribe();
  }

}
