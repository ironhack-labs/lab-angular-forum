import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formInfo = {  
    email: "",
    username: "",
    password: ""
  }

  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit() {
  }
  signup(){
    const user = {
      email: this.formInfo.email,
      username: this.formInfo.username,
      password: this.formInfo.password
      }
      this.authService.signup(user).subscribe(() => this.router.navigate(["/home"]));
  }
}
