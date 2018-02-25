import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ThreadService } from '../services/thread.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  thread: any;
  threadId:string;
  
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    public threadService: ThreadService
  ) {}

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.getThread(params['id']);
      this.threadId = params['id'];
    }) 
  }

  getThread(id) {
    this.threadService.getThreadFromDb(id).subscribe(item => this.thread = item)
  }

  reloadReplies() {
    this.threadService.getThreadFromDb(this.threadId).subscribe(item => this.thread = item)

  }
}
