import { Component, OnInit } from '@angular/core';
import { threadService } from '../../services/threads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread : Object;
  threadId : string;
  constructor(public threadService : threadService, public route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=> this.threadId = params['id'])
    this.threadService.getOneThread(this.threadId).subscribe((thread) => {
      this.thread = thread;
    })
  }
  addReply(id, content){
    const reply = {content}
    this.threadService.addReply(id, reply).subscribe()
  }
}

