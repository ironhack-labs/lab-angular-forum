import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ThreadService } from '../services/thread.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.scss']
})
export class ReplyFormComponent implements OnInit {

  reply: string = '';
  data: object;
  threadId: string = '';

  constructor(
    public session:SessionService, 
    public threadService:ThreadService,
    private route: ActivatedRoute,
  ){}
  ngOnInit(){
    this.route.params.subscribe(params => this.threadId= params['id']); 
  }

  @Output() outputcall = new EventEmitter<string>();

  addReply(content){
    this.reply=content;
    this.data= {
      content: this.reply,
      _id:this.session.getUser()._id,
      threadId:this.threadId
    }
    
    this.threadService.addReply(this.data).subscribe(res => {
      this.outputcall.emit();
      this.reply = '';
      console.log(this.data)
    });
  }





}
