import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../servicios/threads.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread: any;
  idThread: string;
  constructor(public sessionService: ThreadsService, public router: Router, public ActivateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivateRoute.params.subscribe(
      params => (this.idThread = String(params["id"]))
    );
    this.sessionService.getOneThread(this.idThread).subscribe(e => {
      this.thread = e;
    });
  }

}
