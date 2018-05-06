import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"]
})
export class AuthLoginComponent implements OnInit {
  user = {
  username: "",
  password: ""
  }
  
  error: string = "";
  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit() {}

  login() {
    this.sessionService.login(this.user).subscribe(() => {
       this.router.navigate(["/"]);
    });
  }
}