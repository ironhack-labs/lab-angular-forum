import { Component, OnInit } from '@angular/core';
import {Thread } from '../../models/Thread.model';
import { User } from '../../models/User.model';
import { Router } from '@angular/router';
import { ThreadService } from '../../services/thread.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  thread:Thread;
  user:User;
  error:String;
  threadForm={
    title:'',
    content:''
  }
  constructor(private threadService : ThreadService,
              private authService: AuthService,
              private router: Router) {
    this.user = this.authService.getUser();
    this.authService.getLoginEventEmitter()
      .subscribe( user => this.user = user );
  }

  ngOnInit() {
  }

  onSubmitNewThread(newThreadForn){
    this.threadService.addThread(this.threadForm)
      .subscribe(
        (thread) => {
          this.thread =thread;
          this.error=null;
          newThreadForn.reset();
          this.router.navigate(['home']);
        },
        (error)=> {this.error =error;}
   );
  }



}
