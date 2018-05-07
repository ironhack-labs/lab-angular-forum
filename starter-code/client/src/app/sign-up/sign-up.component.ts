import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {

    signUpData = {
        username: "",
        email: "",
        password: ""
      };

  constructor(private authService:AuthService, public router: Router) { }

  ngOnInit() {
  }

    signUp(){
        this.authService.signUp(this.signUpData)
        .subscribe(() => this.router.navigate(["/home"]));
      }
    
      logOut(){
        this.authService.logOut()
        .subscribe(() => this.router.navigate(["/signup"]));
      }

}