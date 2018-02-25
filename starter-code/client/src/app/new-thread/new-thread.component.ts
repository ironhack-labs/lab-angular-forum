import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(public threadsSer: ThreadsService, public session: SessionService, public router: Router) { }

  ngOnInit() {
  }

  newPost(title, content) {
    console.log('newPost');
    title = title.value;
    content = content.value;
    this.threadsSer.create(title, content).subscribe (post => {
      console.log(post);
      this.router.navigate(['/']);
    });
  }

}
