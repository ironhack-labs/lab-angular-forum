import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThreadService } from './../../shared/services/thread/thread.service';
import { IThread } from './../../shared/interfaces/thread.interface';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  thread: IThread = {
    title: "",
    content: ""
  };
  error: string;

  constructor(
    private threadService: ThreadService,
    private router: Router
  ) {}

  ngOnInit() {}

  onCreateThread(threadForm): void {
    this.threadService.createNewThread(this.thread).subscribe(
      thread => {
        console.log(thread);
        this.router.navigate(['']);
      },
      error => {
        this.error = error.message;
      }
    );
  }

}
