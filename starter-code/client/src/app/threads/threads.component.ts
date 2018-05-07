import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Array<any>;

  constructor(private threadsService: ThreadsService) { }

  ngOnInit() {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads );

  }

}