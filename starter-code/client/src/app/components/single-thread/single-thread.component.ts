import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThreadService } from './../../shared/services/thread/thread.service';
import { AuthService } from './../../shared/services/auth/auth.service';
import { IThread } from './../../shared/interfaces/thread.interface';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {

  threadId: string;
  thread: IThread = {
    _author: "",
    title: "",
    content: ""
  };
  error: string;

  constructor(
    private threadService: ThreadService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.threadId = params['id'];
    });

    this.threadService.getThreadById(this.threadId).subscribe(
      thread => {
        this.thread = thread;
        console.log(this.thread);
      },
      error => {
        this.error = error.message;
        console.log(this.error);
      }
    );
  }

}
