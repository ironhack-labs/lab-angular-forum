import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ThreadsService } from "../services/threads.service";

@Component({
  selector: "app-threadDetail",
  templateUrl: "./threadDetail.component.html",
  styleUrls: ["./threadDetail.component.scss"]
})
export class ThreadDetailComponent implements OnInit {
  thread: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private threadService: ThreadsService
  ) {
    
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.threadService.getThread(params["id"]).subscribe(thread => {
        console.log(thread);
        this.thread = thread;
      });
    });
  }
}
