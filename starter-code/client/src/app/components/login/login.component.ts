import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  error: String;
  formInfo={
    username:'',
    password:''
  }
  constructor(  private authService: AuthService,
                private router: Router) {
    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

  ngOnInit() {
  }

  onSubmitLogin(loginForm) {
    this.authService.login(this.formInfo).subscribe(
      (user) => {
        this.user=user;
        this.error=null;
        loginForm.reset();
        this.router.navigate(['home']);
      },
      (error) => { this.error = error;}
    );
  }


  private successCb(user) {
    this.user = user;
    this.error = null;
  }

}
