import { Component, OnInit } from '@angular/core';
import { ForumService } from "../services/forum.service";
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  threads: any[];
  error: string;
  logged: boolean;
  constructor(private forumService: ForumService, private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.isLogged()
      .subscribe(
      (user) => { this.logged = true; }
      );

    this.forumService.get()
      .subscribe(
      (threads) => { this.threads = threads; },
      (err) => { this.error = err; }
      );
  }

}
