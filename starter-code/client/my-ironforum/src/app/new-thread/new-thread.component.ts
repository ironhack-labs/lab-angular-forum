import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  newThread = {
    title: "",
    content: ""
  }
  constructor(public threadsService:ThreadsService, public router: Router) {
   
  }

  ngOnInit() {
  }
  createThread() {
    this.threadsService.addThreads(this.newThread).subscribe( () => this.router.navigate(["/home"]) );
  }
  
}
