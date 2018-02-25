import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
  username: string;
  error: string;
  threadList:Array<any>=[];
  constructor(public session: SessionService, public thread: ThreadService){
    this.thread.getThreads().subscribe(list =>this.threadList = list);
  }
  
  ngOnInit(){
    this.thread.getThreads().subscribe(list => this.threadList = list);
  }

  logout() {
    this.session.logout()
      .catch(e => this.error = e)
      .subscribe();
  }

}
