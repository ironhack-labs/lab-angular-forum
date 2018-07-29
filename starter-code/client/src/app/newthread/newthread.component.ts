import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/threads.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-newthread',
  templateUrl: './newthread.component.html',
  styleUrls: ['./newthread.component.css']
})
export class NewthreadComponent implements OnInit {

  constructor(public threadService: ThreadService, public router: Router, public sessionService: SessionService) { }

  ngOnInit() {
  }

  newThread(title, content){
    this.threadService.newThread(title,content).subscribe();
  }
}
