import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  submitForm(knownUser: any){
    this.sessionService.login(knownUser.value)
      .subscribe((user: User) => {
        console.log (`User ${user} logged OK`);
      }
    );
  }

}
