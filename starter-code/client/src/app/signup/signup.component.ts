import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/Session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup(form) {
    console.log(form.value);
    this.session.signup(form.value)
      .subscribe(
      (user) => {
        console.log(user)
        this.router.navigate(['private'])
      },
      (err) => this.error = err
      );
  }
}
