import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
  username:string;
  password:string;
  error:string;
  constructor(public session:AuthenticationService, public router:Router) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
  }

  signup(){
    this.session.signup(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
  
}
