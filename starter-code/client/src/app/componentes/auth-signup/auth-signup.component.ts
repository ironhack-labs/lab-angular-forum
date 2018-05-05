import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../../servicios/threads.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-signup",
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.css"]
})
export class AuthSignupComponent implements OnInit {
  formInfo = {
    username: "",
    password: "",
    email: ""
  };
  constructor(public sessionService: ThreadsService, public router: Router) {}

  ngOnInit() {}
  signup() {
    this.sessionService
      .signup(this.formInfo)
      .subscribe(() => this.router.navigate(["/private"]));
  }
}
