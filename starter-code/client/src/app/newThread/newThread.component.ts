import { Component, OnInit } from '@angular/core';
import { GetThreadsService } from '../services/getThreads.service';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-newThread',
  templateUrl: './newThread.component.html',
  styleUrls: ['./newThread.component.css']
})
export class NewThreadComponent implements OnInit {
  thread : Object = {
    title: "",
    content: ""
  }
  constructor( private threads : GetThreadsService, public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  newThread(){
    this.threads.newThread(this.thread).subscribe( () => this.router.navigate(['/index']))
  }

}
