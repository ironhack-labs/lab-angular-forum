import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GetThreadsService } from "../services/getThreads.service";
import { AuthService } from "../services/auth.service";

interface Reply {
  _author: number;
  content: string;
  date: Date;
}

interface Thread {
  _id: number;
  _author: number;
  title: string;
  content: string;
  date: Date;
  replies: Array<Reply>;
}

@Component({
  selector: "app-singleThread",
  templateUrl: "./singleThread.component.html",
  styleUrls: ["./singleThread.component.css"]
})
export class SingleThreadComponent implements OnInit {
  thread: Thread;

  constructor(
    public router: Router,
    public authService : AuthService,
    private route: ActivatedRoute,
    private threadsService: GetThreadsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadsService
        .getThread(params.id)
        .subscribe(e => (this.thread = e));
    });
  }
  addReply(content) {
    this.threadsService.updateThread(content, this.thread._id).subscribe(e => {
      this.thread = e;
    });
  }
}
