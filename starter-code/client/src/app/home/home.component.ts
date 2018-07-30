import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 thread: any
  constructor(public threadService:ThreadService, public sessionService:SessionService) { }

  ngOnInit() {
    this.getThreads()
  }

  getThreads() {
    this.threadService.getThreads().subscribe( threads=> {
      this.thread = threads
      console.log(this.thread)
    } )
  }
}
