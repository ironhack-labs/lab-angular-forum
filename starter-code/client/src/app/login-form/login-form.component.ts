import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(public sessionService: SessionService) {}

  ngOnInit() {}

  login() {
    this.sessionService.login(this.username, this.password).subscribe();
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.sessionService.signup(user).subscribe();
  }
}
