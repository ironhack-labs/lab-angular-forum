import { Component, OnInit } from "@angular/core";
import { SessionService } from "../session-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"]
})
export class AuthLoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  error: string = "";
  user: any; 
  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit() {}
  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe(() => {
     // this.router.navigate(["/private"]);
    });
  }
}
