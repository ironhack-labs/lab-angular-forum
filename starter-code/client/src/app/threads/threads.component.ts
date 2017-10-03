import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service'

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads;
  constructor(public threadsService:ThreadsService ) { }

  ngOnInit() {
  this.threadsService.showThreads()
                  .subscribe((threads)=>{
                    this.threads = threads
                  })

  }

}
