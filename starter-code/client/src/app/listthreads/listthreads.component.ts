import { Component, OnInit } from '@angular/core';
import { environment } from "environments/environment.prod";
import { ThreadService } from '../services/threads.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-listthreads',
  templateUrl: './listthreads.component.html',
  styleUrls: ['./listthreads.component.css']
})
export class ListthreadsComponent implements OnInit {
  
  threads: Array<object> = [];

  constructor(private threadService:ThreadService, public sessionService: SessionService) { 
    this.threadService.getThreads().subscribe((threads) => {
      console.log(threads)
      this.threads = threads;
    });
  }

  logout(){
    this.sessionService.logout().subscribe();
  }
  
  ngOnInit() {
  }

}