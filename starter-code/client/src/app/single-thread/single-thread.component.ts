import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: any;
  title: string;
  content: string;

  constructor(
    public threadsService: ThreadsService,
    public route: ActivatedRoute,
    public router: Router,
    public sessionService: SessionService
  ) {
    this.route.params.subscribe(p => {
      console.log(p.id);
      this.threadsService.getOneThread(p.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }

  postReply() {
    this.threadsService
      .postReply(this.thread._id, this.title, this.content)
      .subscribe(thread => (this.thread = thread));
  }
  ngOnInit() {}
}
