import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, public sS : SessionService) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password: string){
    this.sS.signup(username,email,password)
      .subscribe( (user) => {
        console.log(user);
        this.router.navigate(['/']);
      })
  }

}