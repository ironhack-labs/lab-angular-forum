import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads:any;
  constructor(public threadService:ThreadsService) { }

  ngOnInit() {
    this.threadService.getAll().subscribe(threads => this.threads = threads)
  }

}
