import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/Threads.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads:Observable<Array<object>>;;

  constructor(private ThreadsService: ThreadsService) { }

  ngOnInit() {
    this.threads = this.ThreadsService.getThreads();
  }

}
