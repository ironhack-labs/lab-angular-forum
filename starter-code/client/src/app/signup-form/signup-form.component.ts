import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private sessionService:SessionService, private router:Router) { }

  ngOnInit() {
  }

  signup(username:string, password:string, email:string){
    console.log("signup....");
    this.sessionService.signup(username,password,email).subscribe( (user:any) =>{
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/']);
    });
  }
  
}
