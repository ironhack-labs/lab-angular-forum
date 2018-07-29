import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { } //por que se pone el router aqui?

  ngOnInit() {
  }

  signup(username: string, email: string, password: string) {
    this.sessionService.signup(username, email, password).subscribe(user => {
      this.router.navigate(['/']);
    });
  }

}
