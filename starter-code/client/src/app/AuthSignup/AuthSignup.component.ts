import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/Session.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-AuthSignup",
  templateUrl: "./AuthSignup.component.html",
  styleUrls: ["./AuthSignup.component.css"]
})
export class AuthSignupComponent implements OnInit {
  formInfo = {
    username: '',
    email: '',
    password: ''
  };

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() { }

  signup() {
    this.sessionService.signup(this.formInfo).subscribe(() => this.router.navigate(['/home']));
  }
}