import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/Thread.model';
import { User } from '../../models/User.model';

import { ThreadService } from '../../services/thread.service';
import { AuthService } from '../../services/auth.service';


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
              private authService : AuthService){
      this.user = this.authService.getUser();
      this.authService.getLoginEventEmitter()
        .subscribe( user => this.user = user );
  }

  ngOnInit() {
    console.log("--- into thread-list.component ogOnInit");
    this.threadSercice.list().subscribe(
      (threads)=> this.listThread=threads,
      (error)=> this.error=error.message,
    );
  }

}
