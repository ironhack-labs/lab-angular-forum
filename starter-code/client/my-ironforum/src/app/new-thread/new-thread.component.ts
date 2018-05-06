import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ThreadsService } from '../services/threads.service';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  newThreads:Array<any> = [];

  constructor(threadsService:ThreadsService,public session: SessionService) {
    threadsService.addThreads(this.newThreads).subscribe(newThreads => this.newThreads = newThreads);
  }

  ngOnInit() {
  }

}
