import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})

export class ThreadsComponent implements OnInit {
  threads: any;

  constructor(public tS:ThreadService) { }

  ngOnInit() {
this.tS.getAll().subscribe(threads => this.threads = threads)
  }
  
}
