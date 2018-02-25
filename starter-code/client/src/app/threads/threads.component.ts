import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: object;

  constructor(public threadsSer: ThreadsService, public session: SessionService) {
    this.threadsSer.getThreads().subscribe( list => {
      this.threads = list;
      console.log(list);
    });
  }

  ngOnInit() {
  }

  // newPost(title, content) {
  //   console.log('newPost');
  //   title = title.value;
  //   content = content.value;
  //   this.threadsSer.create(title, content).subscribe (post => {
  //     console.log(post);
  //   });
  // }
}
