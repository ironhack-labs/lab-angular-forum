import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: object;

  constructor(public threadsSer: ThreadsService) {
    this.threadsSer.getThreads().subscribe( list => {
      this.threads = list;
      console.log(list);
    });
  }

  ngOnInit() {
  }

}
