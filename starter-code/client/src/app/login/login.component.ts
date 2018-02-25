import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor( private session:SessionService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.session.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['']).catch(e => console.log(e));
    });
  }
}
