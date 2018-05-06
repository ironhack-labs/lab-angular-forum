import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../servicios/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  formInfo = {
    title: "",
    content: ""
  };
  constructor(public sessionService: ThreadsService, public router: Router) { }

  ngOnInit() {
  }
  tnew() {
    this.sessionService
      .tnew(this.formInfo)
      .subscribe(() => this.router.navigate(["/home"]));
  }
}
