import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

interface Reply {
  _author: number;
  content: string;
  date: Date;
}

interface Thread {
  _id: number;
  _author: number;
  title: string;
  content: string;
  date: Date;
  replies: Array<Reply>;
}

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})

export class SingleThreadComponent implements OnInit {
  thread: Thread;

  constructor(
    public threadsSer: ThreadsService,
    public session: SessionService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.getSingleThread(params['id']));
    }

  ngOnInit() {
  }

  getSingleThread(id) {
    this.threadsSer.get(id).subscribe( el => {
      this.thread = el;
      console.log(el);
    });
  }

  addReply(content) {
    this.threadsSer.update(content, this.thread._id).subscribe(el => {
      this.thread = el;
      console.log('thread id: ' + this.thread._id);
    });
  }
}
