import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/sessions';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username:string, password:string, email: string){
    console.log(username,password, email)
    console.log("signup....");
    this.sessionService.signup(username,password,email).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/']);
    });
  }
}