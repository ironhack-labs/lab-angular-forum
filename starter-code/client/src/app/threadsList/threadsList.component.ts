import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../services/threads.service";

@Component({
  selector: "app-threadsList",
  templateUrl: "./threadsList.component.html",
  styleUrls: ["./threadsList.component.scss"],
  providers: [ThreadsService]
})
export class ThreadsListComponent implements OnInit {
  threads;
  constructor(private thread: ThreadsService) {}

  ngOnInit() {
    this.thread.getList().subscribe(threads => {
      this.threads = threads;
    });
  }
}
