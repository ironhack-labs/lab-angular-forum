import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  error: string;

  constructor(private session: SessionService) {}

  signup(username, email, password) {
    this.session.signup(this.username, this.email, this.password)
      .catch(e => this.error = e)
      .subscribe();
  }

  ngOnInit(){}

}
