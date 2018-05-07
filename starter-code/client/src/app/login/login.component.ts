import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formInfo = {  
  username: "",
  password: ""
}

  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit() {
  }
login(){
  this.authService.login(this.formInfo.username, this.formInfo.password).subscribe(() => this.router.navigate(["/home"]));
}


}
