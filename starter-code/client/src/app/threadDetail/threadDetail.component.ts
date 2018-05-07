import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ThreadsService } from "../services/threads.service";
import { RepliesService } from "../services/replies.service";
import { SessionService } from "../services/session.service";

@Component({
  selector: "app-threadDetail",
  templateUrl: "./threadDetail.component.html",
  styleUrls: ["./threadDetail.component.scss"]
})
export class ThreadDetailComponent implements OnInit {
  thread: any;
  reply: string;
  replies: Array<object>;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private threadService: ThreadsService,
    private repliesService: RepliesService,
    private sessionService: SessionService
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.threadService.getThread(params["id"]).subscribe(thread => {
        console.log(thread);
        this.thread = thread;
        this.refreshReplies();
      });
    });
  }
  refreshReplies() {
    this.repliesService
      .getReplies(this.thread._id)
      .subscribe(replies => (this.replies = replies));
  }
  saveReply() {
    console.log(this.reply);
    this.repliesService.saveReply(this.thread._id, this.reply).subscribe(() => {
      this.refreshReplies();
    });
    this.reply = "";
  }
}
