import { Component, OnInit } from "@angular/core";
import { ThreadsServiceService } from "../threads-service.service";

@Component({
  selector: "app-all-threads",
  templateUrl: "./all-threads.component.html",
  styleUrls: ["./all-threads.component.css"]
})
export class AllThreadsComponent implements OnInit {
  threads: Array <Object> = []
  constructor(public threadsServiceService: ThreadsServiceService) {}

  ngOnInit() {
    this.threadsServiceService.getAllThreads().subscribe(threads => {
      this.threads = threads
    });
  }
}
