import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service'
import { Threads } from '../threads-interface'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-threads',
  templateUrl: './list-threads.component.html',
  styleUrls: ['./list-threads.component.css']
})
export class ListThreadsComponent implements OnInit {

  threads: Array<any>;

  constructor( public retrieveT: ThreadsService,) { }

  ngOnInit() {
    this.retrieveT.getThread()
    .subscribe(threads => this.threads = threads)
  }

}
