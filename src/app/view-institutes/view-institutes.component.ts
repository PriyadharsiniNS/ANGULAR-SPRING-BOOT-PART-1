import { Component, OnInit } from '@angular/core';
import { Institute } from '../Institutes';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-view-institutes',
  templateUrl: './view-institutes.component.html',
  styleUrls: ['./view-institutes.component.css']
})
export class ViewInstitutesComponent implements OnInit {

  service : MainServiceService;
  institute : Institute[] = [];
  constructor(service : MainServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.getAllIns().subscribe((data)=>(this.institute = data));
  }

}
