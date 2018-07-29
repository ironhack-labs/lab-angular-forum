import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllthreadsService } from '../../services/allthreads.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  threadId: String;
  thread: Observable<Array<object>>;
  constructor(public singlethread: AllthreadsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.threadId = params['id'],
      this.singlethread.getThread(this.threadId).subscribe(res => this.thread = res);
  });
}
}
