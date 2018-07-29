import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/thread.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(public threadService: ThreadsService, private router: Router) { }

  ngOnInit() {
  }

  createThread(title,content){
    this.threadService.createThread(title, content).subscribe(() => {
      this.router.navigate(["/"])
    })
  }
}
