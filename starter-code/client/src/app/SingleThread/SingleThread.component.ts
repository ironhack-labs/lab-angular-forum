import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/Threads.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-SingleThread',
  templateUrl: './SingleThread.component.html',
  styleUrls: ['./SingleThread.component.css']
})
export class SingleThreadComponent implements OnInit {

  thread: any;

  replyInfo = {
    title: '',
    content: ''
  }


  constructor(private threadService: ThreadsService, public sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.threadService.getThread(params.id)
      .subscribe( thread => this.thread = thread );
    })
  }

  newReply(id) {
    this.threadService.newReply(id, this.replyInfo).subscribe();
  }

}
