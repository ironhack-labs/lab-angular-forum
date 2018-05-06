import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../thread.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-my-thread',
  templateUrl: './my-thread.component.html',
  styleUrls: ['./my-thread.component.css']
})
export class MyThreadComponent implements OnInit {
threadId:string;
thread: any;
  constructor(
    private route: ActivatedRoute, 
    private threadService: ThreadService,
    private sessionService: SessionService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.threadId = params['id'];
  });
    this.threadService.getOneThread(this.threadId).subscribe(thread =>
      this.thread = thread);
    
  }

}
