import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../services/threads.service";

@Component({
  selector: "app-newThread",
  templateUrl: "./newThread.component.html",
  styleUrls: ["./newThread.component.scss"]
})
export class NewThreadComponent implements OnInit {
  title: string;
  content: string;

  constructor(private threadsService: ThreadsService) {}

  ngOnInit() {}
  createThread() {
    console.log(this.title, this.content);
    this.threadsService.newThread(this.title, this.content).subscribe();
    
  }
}
