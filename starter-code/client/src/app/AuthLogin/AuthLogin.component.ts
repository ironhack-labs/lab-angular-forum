import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/Session.service';


@Component({
  selector: 'app-AuthLogin',
  templateUrl: './AuthLogin.component.html',
  styleUrls: ['./AuthLogin.component.css']
})
export class AuthLoginComponent implements OnInit {

  formInfo = {
    username: '',
    password: '',
  };

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  logIn() {
    this.sessionService.login(this.formInfo)
      .subscribe(() => this.router.navigate(['/home']));

  }

}
