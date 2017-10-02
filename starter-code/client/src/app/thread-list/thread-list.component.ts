import { Component, OnInit } from '@angular/core';
import { ThreadListService } from '../services/thread-list.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads;
  constructor( public threadLS : ThreadListService) { }

  ngOnInit() {
    this.threads = this.threadLS.getList();
  }

}
