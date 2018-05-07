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
  email: string;
  constructor(public session: SessionService, public router: Router) {}

  ngOnInit() {}
  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.session.signup(user).subscribe(() => this.router.navigate(['/']));
  }
}
