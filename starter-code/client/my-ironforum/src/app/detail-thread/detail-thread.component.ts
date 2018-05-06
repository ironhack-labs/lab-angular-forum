import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ThreadsService } from '../services/threads.service';
import { SessionService } from "../services/session.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-detail-thread',
  templateUrl: './detail-thread.component.html',
  styleUrls: ['./detail-thread.component.css']
})
export class DetailThreadComponent implements OnInit {
  thread: any;

  constructor(
    route: ActivatedRoute,
    public threadsService:ThreadsService,
    public session: SessionService, 
    public router: Router
  ){  
      route.params.subscribe(params => {
        threadsService.getThread(params.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }
  ngOnInit() {}

}
