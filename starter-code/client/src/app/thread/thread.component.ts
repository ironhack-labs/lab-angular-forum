import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(public threadService: ThreadService, public router:Router) { }

  ngOnInit() {
  }
  
  newThread(title: string, content: string) {
    this.threadService.newThread(title, content).subscribe( (thread: any) => this.router.navigate(['/']))
  }
}
