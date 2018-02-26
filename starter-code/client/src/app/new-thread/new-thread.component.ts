import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ThreadService } from "../../services/thread.service";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: "app-new-thread-component",
  templateUrl: "./new-thread-component.component.html",
  styleUrls: ["./new-thread-component.component.css"]
})
export class NewThreadComponent implements OnInit {
  
  title: string;
  content: string;
  error: string;
  
  constructor(
    public router: Router,
    public thread: ThreadService,
    public aS: AuthService
  ) {}

  ngOnInit() {}

  addThread() {
    let userId = this.aS.getUser()._id;
    this.thread
      .addThread(this.title, this.content, userId)
      .catch(e => (this.error = e))
      .subscribe(() => this.router.navigate(["/"]));
  }
}
