import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadsService } from '../threads.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-one-thread',
  templateUrl: './one-thread.component.html',
  styleUrls: ['./one-thread.component.css']
})
export class OneThreadComponent implements OnInit {
  threadId:string;
  thread: any;

  constructor(private route: ActivatedRoute,private threadService: ThreadsService, private sessionService: SessionService,
public router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => { 
      this.threadId = params['id']; 
    });

    this.threadService.oneThread(this.threadId).subscribe(thread =>
      this.thread = thread);
  }



}
