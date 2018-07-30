import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password: string) {
    console.log(username,email,password)
    console.log('signup');
    this.sessionService.signup(username, email, password).subscribe( (user: any) => {
      this.router.navigate(['/']);
    });
  }

}
