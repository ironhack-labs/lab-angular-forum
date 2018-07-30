import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public sessionService:SessionService, public router:Router) { }

  ngOnInit() {
  }
  login(username:string, password:string){
    console.log("login....");
    this.sessionService.login(username,password).subscribe( user => {
      console.log(user);
      this.router.navigate(["/"])
    });
  }

}
