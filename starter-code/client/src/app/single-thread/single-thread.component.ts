import { Component, OnInit } from "@angular/core";
import { ThreadsServiceService } from "../threads-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-thread",
  templateUrl: "./single-thread.component.html",
  styleUrls: ["./single-thread.component.css"]
})
export class SingleThreadComponent implements OnInit {
  thread: Object = {};
  title: string = "";
  content: string = "";
  id = "";
  constructor(
    public threadsServiceService: ThreadsServiceService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
      this.threadsServiceService.getOneThread(params.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }

  ngOnInit() {}

  newReply() {
    let reply = {
      title: this.title,
      content: this.content
    };

    this.threadsServiceService.newReply(reply, this.id).subscribe();
  }
}
