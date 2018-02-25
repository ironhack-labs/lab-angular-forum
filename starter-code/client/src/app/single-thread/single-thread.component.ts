import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../services/Threads.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {

  thread:any;

  constructor(public tS:ThreadService,
              public aRoute:ActivatedRoute
            ) { }

  ngOnInit() {
    this.aRoute.params.subscribe(params => {
      this.getThreadDetails(params['id']);
    })
  }

  getThreadDetails(id){
    this.tS.getThread(id)
    .subscribe((thread) => {
      this.thread = thread;
    });
  }

}
