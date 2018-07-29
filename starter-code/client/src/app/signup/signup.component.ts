import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formInfo: object = {};
  error: string;

  constructor(private sS:SessionService, private router:Router) { }

  ngOnInit() {
    
  }

  signup(username:string, password:string, email:string){
    this.sS.signup(username, password,  email).subscribe((user:any) =>{
      this.router.navigate(['/']);
    });
  }
}