import { Component, OnInit } from '@angular/core';
import { threadsService } from "../threads.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from '../session.service';


@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css'],
  providers: [threadsService, SessionService],
})
export class SingleThreadComponent implements OnInit {
 thread: any;

  constructor(
    public threadsService: threadsService,
    public router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadsService.getThread(params["id"])
      .subscribe(thread => this.thread = thread)
    })  
  }
 
}
