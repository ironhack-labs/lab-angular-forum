import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})

export class ThreadsListComponent implements OnInit {

  threadList:Array<any>;

  constructor(public tS:ThreadService) {
    this.tS.getThreads().subscribe(list => this.threadList = list)
   }

  ngOnInit() {
  }

}
