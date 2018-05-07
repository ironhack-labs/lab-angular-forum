import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  email: string;

  constructor(private service: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup(username, email, password) {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.service.signup(user)
      .catch(e => this.error = e)
      .subscribe(() => this.router.navigate(['login']));
  }

}
