import { Component, OnInit } from "@angular/core";
import { ThreadService } from "../services/threads.service";
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "../services/session.service";

@Component({
  selector: "app-singlethread",
  templateUrl: "./singlethread.component.html",
  styleUrls: ["./singlethread.component.css"]
})
export class SinglethreadComponent {
  thread: any;
  threadId: Object;
  title: string;

  constructor(
    private threadService: ThreadService,
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {
    this.getThread();
  }

  getThread() {
    this.route.params.subscribe(params => (this.threadId = params["id"]));
    this.threadService.getThread(this.threadId).subscribe(thread => {
      this.thread = thread;
      console.log(this.thread);
    });
  }

  newReply(myForm, id) {
    id = this.threadId;
    this.title = this.thread.title;
    console.log(myForm.value);
    console.log(id);
    this.threadService
      .newReply(myForm.value.content, id, this.title)
      .subscribe(thread => this.getThread());
    myForm.reset();
  }
}
