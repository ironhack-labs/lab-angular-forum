import { Component, OnInit } from '@angular/core';
import { threadsService } from "../threads.service";
import { Threads } from '../threads-interface';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css'],
  providers: [threadsService],
})
export class NewThreadComponent implements OnInit {
  threadInfo = {
    title: "",
    content: ""
  }

  constructor(
    public threadsService: threadsService,
    public router: Router

  ) { }

  ngOnInit() {
  }

  newThread(){
    this.threadsService.newThread(this.threadInfo)
    .subscribe( () => this.router.navigate(["/home"]))
  }
}
