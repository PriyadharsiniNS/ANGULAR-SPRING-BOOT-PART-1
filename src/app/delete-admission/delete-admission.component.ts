import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-delete-admission',
  templateUrl: './delete-admission.component.html',
  styleUrls: ['./delete-admission.component.css']
})
export class DeleteAdmissionComponent implements OnInit {

  service : MainServiceService;
  aid : number = 0;

  constructor(service : MainServiceService) { 
    this.service = service;
  }

  ngOnInit(): void {
  }

  deleteAdmissionDetails(aid : number)
  {
    this.aid = aid;
    this.service.deleteAdm(this.aid).subscribe();
  }

}
