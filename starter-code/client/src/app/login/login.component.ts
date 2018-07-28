import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.login(form.value).subscribe(
      data => this.router.navigate(['/']),
      error => this.error = error.error.message
    );
  }
}
