import { Component, OnInit } from '@angular/core';
import { ThreadService, Thread } from '../../services/thread.service';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css'],
  providers: [ ThreadService ]
})
export class ThreadsListComponent implements OnInit {

  threadsList: Array<Thread> = [];

  constructor(private threadServ: ThreadService) { }

  ngOnInit() {
    this.threadServ.getThreads().subscribe(threads => this.threadsList = threads);
  }

}
