import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-auth-signup",
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.css"]
})
export class AuthSignupComponent implements OnInit {
  user = {
        username: "",
        password: "",
        email: ""
      };
  error: string = "";
  constructor(public sessionService: SessionService, public router: Router) {}
  ngOnInit() {}

  signup() {
      
      this.sessionService.signup(this.user).subscribe(() => this.router.navigate(['/']));
    }
  }