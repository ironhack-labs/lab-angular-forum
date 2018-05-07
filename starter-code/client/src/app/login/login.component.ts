import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [SessionService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit() {}

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password)
    .subscribe(() => this.router.navigate(['/']));
  }

  
}
