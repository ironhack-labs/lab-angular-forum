import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadsService } from '../services/threads.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {

  threadInfo = {
    title: "",
    content: ""
  }

  constructor(public threadService: ThreadsService, public router: Router) { }

  ngOnInit() {
  }

  newThread() {
    this.threadService.newThread(this.threadInfo).subscribe( () => this.router.navigate(["/home"]) );
  }

}
