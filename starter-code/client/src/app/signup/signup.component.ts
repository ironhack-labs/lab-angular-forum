import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  signup(username: string, email: string, password: string) {
    console.log("signup....");
    this.authentication.signup(username, email, password).subscribe( (user: any) => {
      console.log(`WELCOME USER ${user.username}, register OK`);
      console.log(user);
      this.router.navigate(['/']);
    });
}
}
