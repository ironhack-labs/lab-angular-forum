import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  title: string;
  content: string;
  constructor(public threadService: ThreadsService, public router: Router) { }

  ngOnInit() {
  }


}
