import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  threads:any=[]
  constructor(public tS:ThreadsService) { }

  ngOnInit() {
    this.tS.getThreads().subscribe(threads=>{
      this.threads=threads
    })
  }

}
