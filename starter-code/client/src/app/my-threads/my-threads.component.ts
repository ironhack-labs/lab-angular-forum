import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: ['./my-threads.component.css']
})
export class MyThreadsComponent implements OnInit {
  threads: Array<any>;
  constructor(public threadsService: ThreadService) { }

  ngOnInit() {
    this.threadsService.getThreads()
    .subscribe(threads => this.threads = threads)
  }

}
