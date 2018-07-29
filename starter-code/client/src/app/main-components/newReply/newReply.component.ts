import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { ThreadsService } from '../../../services/threads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newReply',
  templateUrl: './newReply.component.html',
  styleUrls: ['./newReply.component.css']
})
export class NewReplyComponent implements OnInit {

  threadId: string;
  constructor(private sessionService: SessionService, private threadsService: ThreadsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.threadId=params['id']);
  }

  addReply(message: string){
    this.threadsService.addReply(this.threadId, message).subscribe()
  }
}
