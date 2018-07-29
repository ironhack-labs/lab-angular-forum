import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  login(username:string, password: string) {
    console.log("login....");
    this.Auth.login(username,password).subscribe( user => {
      console.log(user);
      this.router.navigate(['/']);
    });
  }
}
