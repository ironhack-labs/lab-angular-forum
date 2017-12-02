import { Component, OnInit } from '@angular/core';
import { Thread } from '../../models/Thread.model';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {
  listThread: Array<Thread>;
  error: String;

  constructor(private threadSercice : ThreadService) { }

  ngOnInit() {
    console.log("--- into thread-list.component ogOnInit");
    this.threadSercice.list().subscribe(
      (threads)=> {this.listThread=threads;
        console.log(this.listThread);
      },
      (error)=> this.error=error.message,
    );
  }

}
