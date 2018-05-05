import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/Threads.service';

@Component({
  selector: 'app-ThreadsList',
  templateUrl: './ThreadsList.component.html',
  styleUrls: ['./ThreadsList.component.css']
})
export class ThreadsListComponent implements OnInit {

  threads: Array<any>;

  constructor(private threadsService: ThreadsService) { }

  ngOnInit() {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads );
  }

}
