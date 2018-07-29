import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/thread.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private threadService: ThreadsService, private router: Router) { }

  ngOnInit() {
  }

  newThread(title: string, content: string) {
    this.threadService.newThread(title, content).subscribe( (thread: any) => this.router.navigate(['/']))
  }

}
