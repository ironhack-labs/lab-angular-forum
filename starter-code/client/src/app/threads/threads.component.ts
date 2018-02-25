import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads;
  constructor( private forum: ForumService, private session: SessionService) { 
    this.forum.getThreads()
              .subscribe(res => this.threads = res)
  }

  ngOnInit() { 
  }

}
