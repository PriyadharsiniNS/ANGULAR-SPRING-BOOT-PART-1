import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-delete-institutes',
  templateUrl: './delete-institutes.component.html',
  styleUrls: ['./delete-institutes.component.css']
})
export class DeleteInstitutesComponent implements OnInit {

  instituteId:number=0;
  service:MainServiceService;
  constructor(service:MainServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  deleteInsDetails(instituteId:number)
  {
    this.instituteId = instituteId;
    this.service.deleteIns(this.instituteId).subscribe();
  }
}
