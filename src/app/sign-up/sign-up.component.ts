import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  showError: boolean;
  constructor(private route: Router, private apicall: ApiService) {
    this.user = new User();
    this.showError = true;
  }

  ngOnInit(): void {}

  signupSubmit() {
    if (
      this.user.username.trim() == '' ||
      this.user.email.trim() == '' ||
      this.user.mobileNumber.trim() == '' ||
      this.user.password.trim() == '' ||
      this.user.confirmPassword.trim() == '' ||
      this.user.password.trim() !== this.user.confirmPassword.trim()
    ) {
      this.showError = false;
      return;
    }
    this.showError = true;
    this.apicall.signUp(this.user).subscribe();
    this.route.navigate(['']);
  }

}
