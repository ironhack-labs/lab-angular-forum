import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  username: string;
  password: string;

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username,email,password){
    this.sessionService.signup(username,email,password).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${username}, register OK`);
      this.router.navigate(['/']);
    });
  }
}
