import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  error: String;
  formInfo={
    username:'',
    password:'',
    email:''
  }
  constructor(  private authService: AuthService,
                private router: Router) {
    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

  ngOnInit() {}

  onSubmitSign(signForm) {
    this.authService.signup(this.formInfo).subscribe(
      (user) => {
        this.successCb(user);
        signForm.reset();
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
