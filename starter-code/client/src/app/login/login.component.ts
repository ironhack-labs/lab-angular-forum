import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public sessionService: SessionService, ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe();
  }
}
