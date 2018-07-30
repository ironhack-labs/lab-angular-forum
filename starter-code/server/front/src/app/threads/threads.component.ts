import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads:any;
  constructor(public threadService:ThreadsService) { }
   ngOnInit() {
    this.threadService.getThreadList().subscribe(threads => this.threads = threads)
  }
 } 
