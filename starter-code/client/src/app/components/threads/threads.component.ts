import { Component, OnInit } from '@angular/core';

import { ThreadService } from './../../shared/services/thread/thread.service';
import { IThread } from './../../shared/interfaces/thread.interface';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Array<IThread> = [];
  error: string;

  constructor(private threadService: ThreadService) {}

  ngOnInit() {
    this.threadService.getThreads().subscribe(
      threads => {
        this.threads = threads;
        console.log(this.threads);
      },
      error => {
        this.error = error.message;
        console.log(this.error);
      },

    );
  }

}
