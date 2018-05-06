import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-threads',
  templateUrl: './all-threads.component.html',
  styleUrls: ['./all-threads.component.scss']
})
export class AllThreadsComponent implements OnInit {

  threads: Array<any>;

  constructor(public threadsService: ThreadsService, public userSessionService: UserSessionService, public router: Router) {
    this.threadsService.getThreads()
    .subscribe( threads => this.threads = threads );    
  }

  ngOnInit() {
  }

  logOut(){
    this.userSessionService.logOut()
    .subscribe(() => this.router.navigate(["/home"]));
  }

}
