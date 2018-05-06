import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../services/threads.service";
import { SessionService } from "../services/session.service";

@Component({
  selector: "app-threadsList",
  templateUrl: "./threadsList.component.html",
  styleUrls: ["./threadsList.component.scss"],
  providers: [ThreadsService]
})
export class ThreadsListComponent implements OnInit {
  threads;
  title;
  constructor(private thread: ThreadsService, public sessionService: SessionService) {
    this.sessionService.userEvent.subscribe( user => {
      console.log("USER EVENT");
      if(user){
        this.title = `HOLA ${user.username}`;
      }else{
        this.title = "PLIZ LOGIARSE!";
      }
    })
  }

  ngOnInit() {
    this.thread.getList().subscribe(threads => {
      this.threads = threads;
    });
  }
}
