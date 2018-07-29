import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/thread.service'
import { ActivatedRoute } from '@angular/router'
import { SessionService } from '../services/session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  thread: any
  content: string

  constructor(public threadsService: ThreadsService, private route: ActivatedRoute, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.threadsService.getThreadById(params.id).subscribe( thread => this.thread = thread )
    })
  }

  newReply(content: string) {
    this.threadsService.newReply(this.thread._id, content).subscribe( (thread: any) => {
      this.thread = thread
      this.content = ''
      //this.router.navigate(['/threads', this.thread._id])
    })
  }

}
