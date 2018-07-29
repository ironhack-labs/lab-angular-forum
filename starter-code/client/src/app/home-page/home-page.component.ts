import { Component, OnInit } from '@angular/core';
import { threadService } from '../../services/threads.service';
import { authService } from '../../services/auth.service';

interface Threads{
  _author : Object,
  title: string,
  content: string,
  date: Date,
  replies: Object
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  threadList : any;

  constructor(public threadService : threadService, public authService : authService) { }

  ngOnInit() {
    this.threadService.getThreads().subscribe((list) => {
      this.threadList = list;
    });
  }
  logout(){
    this.authService.logout().subscribe()
  }
}
