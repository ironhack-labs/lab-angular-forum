import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/Threads.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-SingleThread',
  templateUrl: './SingleThread.component.html',
  styleUrls: ['./SingleThread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: any;
  threads: Array<object>;

  replyInfo = {
    title: '',
    content: ''
  };


  constructor(private threadService: ThreadsService, public sessionService: SessionService, public route: ActivatedRoute
  ) { 

    route.params.subscribe(params => {
    threadService.getThreadsId(params.id).subscribe(thread => {
      this.thread = thread;
      this.refreshThreads();
    });
  });

  }

  ngOnInit() {
  // this.route.params.subscribe(params => {
  //   this.threadService.getThreadsId(params.id)
  //     .subscribe(thread => this.thread = thread);
  // });
   }

  refreshThreads() {
    this.threadService.getThreadsId(this.thread._id).subscribe(threads => this.threads = threads);
  }

  newReply(id) {
    this.threadService.newReply(id, this.replyInfo).subscribe();
  }

}
