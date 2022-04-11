import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private addUserUrl: string;
  private getAllUserUrl: string;

  constructor(private http: HttpClient) {
    this.addUserUrl = 'http://localhost:8080/user/signup';
    this.getAllUserUrl = 'http://localhost:8080/users';
  }
  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.addUserUrl, user, httpOptions);
  }
  logIn(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUserUrl);
  }
}