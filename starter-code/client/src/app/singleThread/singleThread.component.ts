import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetThreadsService } from '../services/getThreads.service';

@Component({
  selector: 'app-singleThread',
  templateUrl: './singleThread.component.html',
  styleUrls: ['./singleThread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: Object;
  
  constructor(public router: ActivatedRoute, private threadService: GetThreadsService ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.threadService.getThread(params.id)
      .subscribe( thread => this.thread = thread );
    })

  }

}
