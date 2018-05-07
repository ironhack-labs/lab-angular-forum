import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit() {}

  logout() {
    this.sessionService.logout().subscribe(() => {
      console.log("LOGOUT")
      this.router.navigate(["/"]);
    });
  }
}
