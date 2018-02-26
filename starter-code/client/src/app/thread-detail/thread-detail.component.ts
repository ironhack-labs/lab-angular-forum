import { Component, OnInit } from '@angular/core';
import { ForumService } from "../services/forum.service";
import { SessionService } from '../services/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  thread: any;
  error: string;
  errors: any;
  logged: boolean;
  replyInfo: any = {
    content: ""
  };
  constructor(private route: ActivatedRoute, private forumService: ForumService, private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.isLogged()
      .subscribe(
      (user) => { this.logged = true; }
    );

    this.route.params
      .subscribe((params) => {
        this.forumService.getThread(params['id']).subscribe(
          (thread) => { this.thread = thread },
          (err) => { this.error = err}
        );
      });
  }

  newReply() {
    this.forumService.newReply(this.thread._id, this.replyInfo).subscribe(
      (thread) => {
        this.thread = thread;
        this.replyInfo = {
          content: ""
        };
      },
      (err) => {
        if (err.name == 'ValidationError' && err.errors) {
          this.errors = {};
          Object.keys(err.errors).forEach(key => { this.errors[err.errors[key].path] = err.errors[key].message });
        } else {
          this.error = err.message;
        }
      });
  }

}
