import { Component, OnInit } from "@angular/core";
import { ThreadsServiceService } from "../threads-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-thread",
  templateUrl: "./single-thread.component.html",
  styleUrls: ["./single-thread.component.css"]
})
export class SingleThreadComponent implements OnInit {
  thread: Object = {};
  // title: string = "";
  content: string = "";
  id = "";
  replies: Array<object> = [];
  constructor(
    public threadsServiceService: ThreadsServiceService,
    public route: ActivatedRoute
  ) {
  
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.getOneThread(this.id);

    });
  }

  newReply() {
    let reply = {
      // title: this.title,
      content: this.content
    };
    this.content = ""; 
    this.threadsServiceService.newReply(reply, this.id).subscribe(thread => {
      this.getOneThread(this.id);
    });
  }

  getOneThread(id) {
    this.threadsServiceService.getOneThread(id).subscribe(thread => {
      {
        this.replies = thread.replies;
        console.log(this.thread)
        return this.thread = thread;
      }
    });
  }
}
