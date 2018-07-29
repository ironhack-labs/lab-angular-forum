import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ThreadsService } from '../../services/threads.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread:any={_author:{}}
  constructor(public route:ActivatedRoute,public tS:ThreadsService,public sessionService:SessionService) { 
    this.route.params.subscribe(params=>{
      this.tS.getThread(params["id"]).subscribe(thread=>{
        this.thread=thread
      })
    })
  }

  ngOnInit() {
    

  }

  newReply(content){
    this.tS.newReply(content,this.thread._id).subscribe(thread=>{
      this.thread=thread
    })
  }

}
