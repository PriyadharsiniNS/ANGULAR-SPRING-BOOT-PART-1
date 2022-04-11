import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: User[];
  user: User;
  showError: boolean;
  apicall : ApiService;
  constructor(apicall: ApiService, private route: Router) {
    this.user = new User();
    this.showError = true;
    this.users = [];
    this.apicall = apicall;
  }

  ngOnInit(): void {
    this.apicall.logIn().subscribe({
      next: (data) => {
        this.users = data;
      },
    });
  }
  loginSubmit() {
    if (
      this.user.email == 'admin@gmail.com' &&
      this.user.password == 'Admin@123'
    ) {
      this.route.navigate(['/admin']);
      return;
    }
    if (this.user.email.trim() == '' || this.user.password.trim() == '') {
      this.showError = false;
      return;
    }
    this.showError = true;
    this.users.forEach((user) => {
      if (
        this.user.email == user.email &&
        this.user.password == user.password
      ) {
        if (user.userRole == 'user') {
          this.route.navigate(['/user']);
        }
      }
    });
  }
}
