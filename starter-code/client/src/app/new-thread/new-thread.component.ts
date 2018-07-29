import { Component, OnInit } from '@angular/core';
import { threadService } from '../../services/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(public threadService : threadService, public router : Router) { }

  ngOnInit() {
  }
  createThread(title, content){
    const thread = {title, content}
    this.threadService.createThread(thread).subscribe()
    this.router.navigate(['/'])
  }
}
