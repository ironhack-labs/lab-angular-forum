import { Component, OnInit } from "@angular/core";
import { ThreadService } from "../services/thread.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-ThreadList",
  templateUrl: "./ThreadList.component.html",
  styleUrls: ["./ThreadList.component.css"]
})
export class ThreadListComponent implements OnInit {
  threads: Observable<any>;

  constructor(threadService: ThreadService) {
    threadService.getThreads().subscribe(threads => {
      this.threads = threads;
      console.log(this.threads);
    });
  }

  ngOnInit() {}
}
