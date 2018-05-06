import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadsService } from '../services/Threads.service';

@Component({
  selector: 'app-NewThread',
  templateUrl: './NewThread.component.html',
  styleUrls: ['./NewThread.component.css']
})
export class NewThreadComponent implements OnInit {

  threadInfo = {
    title: "",
    content: ""
  }

  constructor(public threadService: ThreadsService, public router: Router) { }

  ngOnInit() {
  }

  newThread() {
    this.threadService.newThread(this.threadInfo).subscribe( () => this.router.navigate(["/home"]) );
  }

}
