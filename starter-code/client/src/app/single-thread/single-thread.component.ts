import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: object;
  constructor(
    public threadsService: ThreadsService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.params.subscribe(p => {
      console.log(p.id);
      this.threadsService.getOneThread(p.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }

  ngOnInit() {}
}
