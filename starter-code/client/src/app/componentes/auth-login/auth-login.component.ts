import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../../servicios/threads.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.css"]
})
export class AuthLoginComponent implements OnInit {
  formInfo = {
    username: "",
    password: ""
  };
  constructor(public sessionService: ThreadsService, public router: Router) {}

  ngOnInit() {}
  logIn() {
    this.sessionService
      .login(this.formInfo)
      .subscribe(() => this.router.navigate(["/home"]));
  }
}
