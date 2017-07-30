import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  error: string;
  username:string;
  password:string;
  email:string;
  constructor(private session: SessionService, private router:Router) { }

  ngOnInit() {
  }
  signup(form) {
    this.session.signup(form.value)
      .subscribe(
        (user) =>{
           console.log(user)
           this.router.navigate(['/'])
         },
        (err) => this.error = err
      );
  }
}
