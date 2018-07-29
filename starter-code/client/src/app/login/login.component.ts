import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sS : SessionService, public router : Router) { }

  ngOnInit() {}

  login(username:string, password:string){
    console.log("login....");
    this.sS.login(username,password).subscribe( user => {
      console.log(user)
      this.router.navigate(['/']);
    });
  }

}