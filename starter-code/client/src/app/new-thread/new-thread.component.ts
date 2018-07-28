import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  newThread: object = {};
  error: string;

  constructor(public threadService: ThreadService, public router: Router) { }

  ngOnInit() {
  }

  createThread() {
    this.threadService.createThread(this.newThread).subscribe(
      data => this.router.navigate(['/']),
      error => this.error = error.error.message
    );
  }
}
