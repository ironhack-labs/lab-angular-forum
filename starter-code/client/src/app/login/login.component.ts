import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService : authService, public router : Router) { }

  ngOnInit() {
  }
  login(username, password){
    return this.authService.login(username, password).subscribe((user: any) => {
      this.router.navigate(['/'])
    })
  }
}
