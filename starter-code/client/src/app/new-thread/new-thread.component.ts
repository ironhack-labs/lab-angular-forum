import { Component, OnInit } from "@angular/core";
import { ForumService } from "../../services/forum.service";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";

@Component({
  selector: "app-new-thread",
  templateUrl: "./new-thread.component.html",
  styleUrls: ["./new-thread.component.css"]
})
export class NewThreadComponent implements OnInit {
  _author: any;
  title: string;
  content:string;
  error:string;

  constructor(private forum: ForumService, private router: Router, private session: SessionService) {}

  ngOnInit() {
  }

  newThread() {
    this.forum
      .newThread(this.session.getUser()._id, this.title, this.content)
      .subscribe(data => this.router.navigate([""]), err => (this.error = err));
  }
}
