import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInInfo = {
    username: "",
    password: ""
  }

  constructor(public userSessionService: UserSessionService, public router: Router) {}

  ngOnInit() {}

  logIn(){
    this.userSessionService.logIn(this.logInInfo)
    .subscribe(() => this.router.navigate(["/home"]));
  }

  logOut(){
    this.userSessionService.logOut()
    .subscribe(() => this.router.navigate(["/login"]));
  }

}