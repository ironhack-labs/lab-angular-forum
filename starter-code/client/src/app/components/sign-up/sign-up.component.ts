import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signUp(username: string, email: string, password: string) {
    console.log('signup');
    this.sessionService.signup(username, email, password).subscribe( (user: any) => {
      this.router.navigate(['/']);
    });
  }
}
