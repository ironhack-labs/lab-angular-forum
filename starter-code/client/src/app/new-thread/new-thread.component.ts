import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

form = {
  title: '',
  content: ''
};

  constructor(public threadService: ThreadService) { }

  ngOnInit() {
  }

  submitThread(form) {
    this.threadService.newThread(form).subscribe();
  }

}
