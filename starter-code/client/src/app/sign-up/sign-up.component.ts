import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpInfo = {
    username: "",
    email: "",
    password: ""
  };

  constructor(public userSessionService: UserSessionService, public router: Router) {}

  ngOnInit() {}

  signUp(){
    this.userSessionService.signUp(this.signUpInfo)
    .subscribe(() => this.router.navigate(["/home"]));
  }

  logOut(){
    this.userSessionService.logOut()
    .subscribe(() => this.router.navigate(["/signup"]));
  }

}