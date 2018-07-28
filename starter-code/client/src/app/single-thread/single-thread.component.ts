import { Component, OnInit } from '@angular/core';
import { ThreadService } from './../services/thread.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: any;
  newReply: string;

  constructor(public threadService: ThreadService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadService.getById(params.id).subscribe(data => {
        this.thread = data;
      });
    });
  }

  createReply(){
    this.threadService.addReply(this.thread._id, this.newReply).subscribe(
      data => this.ngOnInit()
    );
  }

}
