import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;

  constructor( public sessionService:SessionService,public router:Router) { }

  ngOnInit() {
  }

  login(){
    this.sessionService.login(this.username,this.password).subscribe (user=>{
      console.log(user);
      this.router.navigate(['/']);
    })
  }
}
