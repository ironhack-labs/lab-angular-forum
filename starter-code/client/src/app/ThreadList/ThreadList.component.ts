import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-ThreadList',
  templateUrl: './ThreadList.component.html',
  styleUrls: ['./ThreadList.component.css']
})
export class ThreadListComponent implements OnInit {

  threadsList: Array<any>;

  constructor(
    private threadService: ThreadService,
    public sessionService: SessionService
  ) {}

  ngOnInit() {
    this.threadService
      .getThreads()
      .subscribe(threads => (this.threadsList = threads));
  }

  
}
