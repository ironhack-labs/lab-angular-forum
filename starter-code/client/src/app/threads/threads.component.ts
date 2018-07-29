import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { threadService } from "../services/thread.service";

@Component({
  selector: "app-threads",
  templateUrl: "./threads.component.html",
  styleUrls: ["./threads.component.css"],
  providers: [threadService]
})
export class ThreadsComponent implements OnInit {
  threads: Array<Object> = [];

  constructor(public tS: threadService, private router: Router) {
    this.tS.getThreads().subscribe(threads => {
      this.threads = threads;
    });
  }

  ngOnInit() {}
}
