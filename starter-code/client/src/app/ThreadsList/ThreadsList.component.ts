import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/Threads.service';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-ThreadsList',
  templateUrl: './ThreadsList.component.html',
  styleUrls: ['./ThreadsList.component.css']
})
export class ThreadsListComponent implements OnInit {

  threads: Array<any>;

  constructor(private threadsService: ThreadsService, public sessionService: SessionService) { }

  ngOnInit() {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads);
  }

}
