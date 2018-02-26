import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  error: string;

  constructor(private session:SessionService, private router: Router) { }

  ngOnInit() {
  }
  signup() {
     this.session.signup(this.username, this.email, this.password)
                 .subscribe(data => this.router.navigate(['']), 
                            err => this.error = err );
  }
}
