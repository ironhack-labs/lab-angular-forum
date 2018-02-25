import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {
  error: string;
  data: object;

  constructor(private thread: ThreadService, private session: SessionService, private router: Router) { }

  ngOnInit(){}

  @Output() outputcall = new EventEmitter<string>();

  newThread(form) {
    this.data = {
      "title":form.value.title,
      "content": form.value.content,
      "_id": this.session.getUser()._id
    }
    this.thread.addThread(this.data).subscribe((res)=> this.router.navigate(['/home']))
  }

}
