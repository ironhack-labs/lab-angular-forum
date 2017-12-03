import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from './../../shared/interfaces/user.interface';
import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: IUser = new Object();
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmitForm(signupForm) {
    this.authService.signup(this.user).subscribe(
      user => {
        signupForm.reset();
        this.router.navigate(['login']);
      },
      error => {
        this.error = error.message;
      });
  }

}
