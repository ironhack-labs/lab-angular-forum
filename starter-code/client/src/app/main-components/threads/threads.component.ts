import { Component, OnInit, Input } from '@angular/core';
import { ThreadsService } from '../../../services/threads.service';
import { Thread } from '../../../interfaces/Tread';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
})
export class ThreadsComponent implements OnInit {

  threads: Array<Thread>;
  
  constructor(private threadsService: ThreadsService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.threadsService.getThreads().subscribe(threads => this.threads=threads);
  }

  newThread(){
    this.threadsService.enableNewThreadForm = true;
  }

  threadDetails(id){
    this.threadsService.showOneThread = true;
    this.threadsService.showThreadList= false;
    this.router.navigate(['/thread', id]);
  }
}
