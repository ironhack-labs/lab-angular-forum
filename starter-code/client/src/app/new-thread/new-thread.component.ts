import { Component, OnInit } from "@angular/core";
import { ThreadsServiceService } from "../threads-service.service";

@Component({
  selector: "app-new-thread",
  templateUrl: "./new-thread.component.html",
  styleUrls: ["./new-thread.component.css"]
})
export class NewThreadComponent implements OnInit {
  title: string = "";
  content: string = "";
  constructor(public threadsServiceService: ThreadsServiceService) {}

  ngOnInit() {}

  newThread() {
    let thread = {
      title: this.title,
      content: this.content
    };
    this.threadsServiceService.newThread(thread).subscribe(e => console.log(e));
  }
}
