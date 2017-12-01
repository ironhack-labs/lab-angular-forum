import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

interface LoginForm{
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formInfo:LoginForm = {
  username: "",
  password: ""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }
  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      // console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }


}
