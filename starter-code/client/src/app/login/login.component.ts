import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;


  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit() {
  }
login(){
  this.authService.login(this.username, this.password).subscribe(() => this.router.navigate(["/home"]));
}

// signup(){
//   const user = {
//     username: this.username,
//     password: this.password
//     }
//     this.authService.signup(user).subscribe();
// }

}
