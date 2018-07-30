import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  idThread:any
  constructor(public threadService:ThreadService, public route: ActivatedRoute, public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.threadService.getThreadById(params.id).subscribe(thread=>{
        this.idThread=thread
        console.log(this.idThread)
      })
    })
  }



}
