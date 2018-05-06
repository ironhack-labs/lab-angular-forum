import { Component, OnInit } from "@angular/core";
import { ThreadsServiceService } from "../threads-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-thread",
  templateUrl: "./single-thread.component.html",
  styleUrls: ["./single-thread.component.css"]
})
export class SingleThreadComponent implements OnInit {
  thread: Object = {}
  constructor(
    public threadsServiceService: ThreadsServiceService,
    route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.threadsServiceService.getOneThread(params.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }

  ngOnInit() {}
}
