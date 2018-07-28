import { ThreadService } from './../services/thread.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: object = this.threadService.threads;

  constructor(public threadService: ThreadService, public authService: AuthService) { }

  ngOnInit() {
    this.threadService.getAll().subscribe();
  }

}
