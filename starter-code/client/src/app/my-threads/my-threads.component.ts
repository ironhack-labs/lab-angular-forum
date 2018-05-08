import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadsService } from '../threads.service';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: ['./my-threads.component.css']
})
export class MyThreadsComponent implements OnInit {
  threads: Array<object>;
  constructor(private router: Router, public threadsService: ThreadsService) {}

  ngOnInit() {
    this.threadsService
      .getThreads()
      .subscribe(threads => (this.threads = threads));
  }
}
