import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThreadService } from '../thread.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  title:string;
  content:string;
  thread: any;
  constructor(
    private route: ActivatedRoute, 
    private threadService: ThreadService,
    private sessionService: SessionService,
    public router: Router
  ) { }

  ngOnInit() {
  }
newThread(){

  this.threadService.createThread(this.title, this.content).subscribe()
  
}
}
