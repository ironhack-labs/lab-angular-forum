import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  createUser(form: NgForm) {
    this.authService.signup(form.value).subscribe(
      data => this.router.navigate(['/']),
      error => this.error = error.error.message
    );
  }
}
