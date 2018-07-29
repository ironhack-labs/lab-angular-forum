import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  constructor(public sessionService:SessionService,public router:Router) { }

  ngOnInit() {
  }
  signup(username,password,email){
    this.sessionService.signup(username,email,password).subscribe(
      (user:any)=>{
        console.log(`The user ${username} register OK`);
        this.router.navigate(['/']);
      }
    )

  }


}
