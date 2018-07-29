import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ThreadService, Thread } from '../../services/thread.service';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css'],
  providers: [ThreadService]
})
export class SingleThreadComponent implements OnInit {

  thread: Thread;

  constructor(private threadsServ: ThreadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.threadsServ.getThread(params.id).subscribe(thread => this.thread = thread);
    });
  }

}
