import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  threadList: Array<any> = [];

  constructor(public threadsService: ThreadsService, public sessionService: SessionService) { }
   ngOnInit() {
    this.getThreads()
  }
   getThreads() {
    this.threadsService.getAllThreads().subscribe( threadList => this.threadList = threadList )
  }
}
