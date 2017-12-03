import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/Thread.model';
import { User } from '../../models/User.model';
import { ThreadService } from '../../services/thread.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  user: User;
  thread: Thread;
  error :String;
  content :String;

  constructor(private threadService: ThreadService,
              private authService : AuthService) {

    this.thread = this.threadService.getThread();
    this.threadService.getThreadEventEmitter()
      .subscribe( thread => this.thread = thread );

    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );

  }

  ngOnInit() {}

  onSubmitReply(replyForm,id){
    this.threadService.addReply(this.content,id)
      .subscribe(
        (thread)=>{
          this.thread=thread;  
          replyForm.reset()},
        (error)=> this.error=error);
    }

}
