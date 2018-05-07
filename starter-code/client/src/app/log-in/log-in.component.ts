import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent {

  logInData = {
       username: "",
       password: ""
     }
    
     constructor(private authService:AuthService, public router: Router) {}
    
     logIn(){
       this.authService.logIn(this.logInData)
       .subscribe(() => this.router.navigate(["/home"]));
     }
    
     logOut(){
       this.authService.logOut()
       .subscribe(() => this.router.navigate(["/login"]));
     }

}