import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    
    console.log(user);
    this.sessionService.signup(user).subscribe();
}

}
