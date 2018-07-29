import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../../services/threads.service';
import { Thread } from '../../../interfaces/Tread';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleThread',
  templateUrl: './singleThread.component.html',
  styleUrls: ['./singleThread.component.css']
})
export class SingleThreadComponent implements OnInit {

  thread: Thread;
  threadId: string;
  constructor(private threadService: ThreadsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.threadId=params['id'])
    this.threadService.getSingleThread(this.threadId).subscribe(thread => this.thread=thread)
  }

  backHome(){
    this.threadService.showOneThread=false;
    this.threadService.showThreadList=true;
    this.router.navigate(['/']);
  }

}
