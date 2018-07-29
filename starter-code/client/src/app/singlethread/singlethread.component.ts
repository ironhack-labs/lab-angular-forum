import { Component, OnInit } from "@angular/core";
import { ThreadService } from "../services/threads.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-singlethread",
  templateUrl: "./singlethread.component.html",
  styleUrls: ["./singlethread.component.css"]
})
export class SinglethreadComponent implements OnInit {
  thread: Object;
  threadId: Object;

  constructor(
    private threadService: ThreadService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.threadId = params["id"]));
    this.threadService.getThread(this.threadId).subscribe(thread => {
      this.thread = thread;
      console.log(this.thread)
    });
  }

  ngOnInit() {}
}
