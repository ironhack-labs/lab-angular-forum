import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads;
  constructor( private forum: ForumService) { 
    this.forum.getThreads()
              .subscribe(res => this.threads = res)
  }

  ngOnInit() {
    
    console.log(this.threads)
  }

}
