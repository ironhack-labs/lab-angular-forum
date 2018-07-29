import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService : authService, public router : Router) { }

  ngOnInit() {
  }
  signup(username : string, email: string, password : string){
    const user = {username, email, password}
    this.authService.signUp(user).subscribe((user: any) => {
      this.router.navigate(['/'])
    })
  }
}
