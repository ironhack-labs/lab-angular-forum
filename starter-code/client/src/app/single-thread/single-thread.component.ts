import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { UserSessionService } from '../services/user-session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.scss']
})
export class SingleThreadComponent implements OnInit {

  thread: any;

  replyInfo = {
    content: ""
  }

  constructor(private threadService: ThreadsService, public userSessionService: UserSessionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.threadService.getThread(params.id)
      .subscribe( thread => this.thread = thread );
    })
  }

  newReply(id) {
    this.threadService.newReply(id, this.replyInfo).subscribe( 
      thread => this.thread = thread
    );
  }

}
