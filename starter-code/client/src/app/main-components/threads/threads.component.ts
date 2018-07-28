import { Component, OnInit, Input } from '@angular/core';
import { ThreadsService } from '../../../services/threads.service';
import { Thread } from '../../../interfaces/Tread';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
})
export class ThreadsComponent implements OnInit {

  threads: Array<Thread>;
  
  constructor(private threadsService: ThreadsService) { }

  ngOnInit() {
    this.threadsService.getThreads().subscribe(threads => this.threads=threads);
  }
  newThread(){
    this.threadsService.enableNewThreadForm = true;
  }
}
