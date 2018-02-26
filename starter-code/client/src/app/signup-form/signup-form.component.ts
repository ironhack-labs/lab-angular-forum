import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  
  username: string;
  error:string;
  password:string;

  constructor(private session:SessionService, private router:Router) { }

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