import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';

@Component({
  selector: 'app-all-threads',
  templateUrl: './all-threads.component.html',
  styleUrls: ['./all-threads.component.scss']
})
export class AllThreadsComponent implements OnInit {

  threads: Array<any>;

  constructor(public threadsService: ThreadsService) {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads );    
  }

  ngOnInit() {
  }

}
