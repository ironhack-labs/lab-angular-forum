import { Component, OnInit } from '@angular/core';
import { ThreadService } from './../../services/thread.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})

export class NewThreadComponent implements OnInit {

  constructor(public threadService: ThreadService, private router: Router) { }

  ngOnInit() {
  }

  newThread(title,content){
    this.threadService.newThread(title, content).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
}