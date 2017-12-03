import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from './../../shared/interfaces/user.interface';
import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = new Object();
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmitLogin(loginForm) {
    this.authService.login(this.user).subscribe(
      user => {
        loginForm.reset();
        this.router.navigate(['']);
      },
      error => {
        this.error = error.message;
      }
    );
  }

}
