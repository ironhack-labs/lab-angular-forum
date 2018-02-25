import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  username:string;
  password:string;
  error:string;
  constructor(public session:SessionService) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
  }

  signup(){
    this.session.signup(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe();
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}

