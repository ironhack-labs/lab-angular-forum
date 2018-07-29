import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/thread.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: any;
  constructor(public threadService:ThreadsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadService.getById(params.id).subscribe(data => {
        this.thread = data;
      });
    });
  }

}
