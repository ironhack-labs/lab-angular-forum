import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/thread.service'
import { SessionService } from '../services/session.service'

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Array<Object>

  constructor(public threadsService: ThreadsService, public sessionService: SessionService) { }

  ngOnInit() {
    this.getThreads()
  }

  getThreads() {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads )
  }
}
