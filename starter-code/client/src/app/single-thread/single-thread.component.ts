import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/thread.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})
export class SingleThreadComponent implements OnInit {
  thread: any;
  constructor(public threadService:ThreadsService, private route: ActivatedRoute, public sessionService:SessionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadService.getById(params.id).subscribe(data => {
        this.thread = data;
      });
    });
  }
  reply(id,content,form){
    this.threadService.reply(id, content).subscribe(data => {
      this.thread = data;
      form.reset()
    })
  }
}