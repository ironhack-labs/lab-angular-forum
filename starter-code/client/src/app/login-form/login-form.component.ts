import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form = {
    username: '',
    password: ''
  };

  constructor(public router: Router, public sessionService: SessionService) {}

  ngOnInit() {}

  login() {
    this.sessionService
      .login(this.form)
      .subscribe(() => this.router.navigate(['/home']));
  }

  logout() {
    this.sessionService.logout().subscribe();
  }

  signup() {
    this.sessionService.signup(this.form).subscribe();
  }
}
