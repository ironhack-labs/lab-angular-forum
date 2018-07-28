import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  submitForm(newUser: any){
    this.sessionService.signup(newUser.value)
    .subscribe( (user: User) => {
      console.log(`User ${user.username} logged OK`);
    });
  }


}
