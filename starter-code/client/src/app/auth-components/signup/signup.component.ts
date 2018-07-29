import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { User } from '../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(newUser: any){
    this.sessionService.signup(newUser.value)
    .subscribe( (user: User) => {
      console.log(`User ${user.username} logged OK`);
      this.router.navigate(['/']);
    });
  }


}
