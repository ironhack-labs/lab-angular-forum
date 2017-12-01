import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {
  threads;

  constructor(public threadsService: ThreadsService) { }

  ngOnInit() {
    this.threads = this.threadsService.getList()
    console.log(this.threads)
  }
}
