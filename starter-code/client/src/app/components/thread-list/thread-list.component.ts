import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/Thread.model';
import { User } from '../../models/User.model';

import { ThreadService } from '../../services/thread.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  listThread: Array<Thread>;
  error: String;
  user: User;

  constructor(private threadSercice : ThreadService,
              private authService : AuthService,
              private route: ActivatedRoute){
      this.user = this.authService.getUser();
      this.authService.getLoginEventEmitter()
        .subscribe( user => this.user = user );
  }

  ngOnInit() {
    this.route.params
      .subscribe((params) =>{
        if(params['error'] != undefined){
         this.error = String(params['error'])
       }
       else this.error=null;
       });

    console.log("--- into thread-list.component ogOnInit");
    this.threadSercice.list().subscribe(
      (threads)=> this.listThread=threads,
      (error)=> this.error=error.message,
    );
  }

}
