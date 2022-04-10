import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from './course';
import { Institute } from './Institutes';
import { Student } from './Students';
import { Admission } from './Admissions';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  http : HttpClient;
  
  viewCourseUrl : string;
  addCourseUrl : string;
  editCourseUrl : string;
  deleteCourseUrl : string;

  viewInsUrl : string;
  addInsUrl : string;
  editInsUrl : string;
  deleteInsUrl : string;

  viewStuUrl : string;
  addStuUrl : string;
  editStuUrl : string;
  deleteStuUrl : string;

  viewAdmUrl : string;
  addAdmUrl : string;
  editAdmUrl : string;
  deleteAdmUrl : string;
  
  constructor(http : HttpClient) { 
    this.http = http;
    this.viewCourseUrl = 'http://localhost:8080/viewallcourses';
    this.addCourseUrl = 'http://localhost:8080/addcourses';
    this.editCourseUrl = 'http://localhost:8080/editcourses';
    this.deleteCourseUrl = 'http://localhost:8080/deletecourses';

    this.viewInsUrl = 'http://localhost:8080/viewallinstitutes';
    this.addInsUrl = 'http://localhost:8080/addinstitutes';
    this.editInsUrl = 'http://localhost:8080/editinstitutes';
    this.deleteInsUrl = 'http://localhost:8080/deleteinstitutes';

    this.viewStuUrl = 'http://localhost:8080/viewallstudents';
    this.addStuUrl = 'http://localhost:8080/addstudent';
    this.editStuUrl = 'http://localhost:8080/editstudent';
    this.deleteStuUrl = 'http://localhost:8080/deletestudent';

    this.viewAdmUrl = 'http://localhost:8080/viewalladmissions';
    this.addAdmUrl = 'http://localhost:8080/addadmission';
    this.editAdmUrl = 'http://localhost:8080/editadmission';
    this.deleteAdmUrl = 'http://localhost:8080/deleteadmission';
  }

  public getAllCourses() : Observable<Course[]>
  {
    return this.http.get<Course[]>(this.viewCourseUrl);
  }

  public addCourses(c:Course)
  {
    return this.http.post<Course>(this.addCourseUrl,c);
  }

  public editCourses(c:Course)
  {
    return this.http.put(this.editCourseUrl,c);
  }

  public deleteCourses(cid:number) : Observable<any>
  {
    return this.http.delete(`${this.deleteCourseUrl}/${cid}`);
  }

  public getAllIns() : Observable<Institute[]>
  {
    return this.http.get<Institute[]>(this.viewInsUrl);
  }

  public addIns(i : Institute)
  {
    return this.http.post<Institute>(this.addInsUrl,i);
  } 

  public editIns(i : Institute)
  {
    return this.http.put(this.editInsUrl,i);
  }

  public deleteIns(iid:number)
  {
    return this.http.delete(`${this.deleteInsUrl}/${iid}`);
  }

  public addStu(s : Student)
  {
    return this.http.post<Student>(this.addStuUrl,s);
  } 

  public editStu(s : Student)
  {
    return this.http.put(this.editStuUrl,s);
  }

  public deleteStu(sid:number)
  {
    return this.http.delete(`${this.deleteStuUrl}/${sid}`);
  }

  public getAllStu() : Observable<Student[]>
  {
    return this.http.get<Student[]>(this.viewStuUrl);
  }

  public addAdm(a : Admission)
  {
    return this.http.post<Admission>(this.addAdmUrl,a);
  } 

  public editAdm(a : Admission)
  {
    return this.http.put(this.editAdmUrl,a);
  }

  public deleteAdm(aid:number)
  {
    return this.http.delete(`${this.deleteAdmUrl}/${aid}`);
  }

  public getAllAdm() : Observable<Admission[]>
  {
    return this.http.get<Admission[]>(this.viewAdmUrl);
  }

}
