import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ForumService } from "../../services/forum.service";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  username:string;
  password:string;
  error:string;
  
  constructor(public session:ForumService) { }

  ngOnInit() {
    console.log(this.session)
    this.session.isLoggedIn().subscribe();
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
  }
}