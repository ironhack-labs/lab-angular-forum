import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../servicios/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  formReply = {
    title: "",
    content: ""
  };
  constructor(public sessionService: ThreadsService, public router: Router) { }

  ngOnInit() {
  }
  reply(idThread, reply) {
    this.sessionService
      .reply(idThread, this.formReply)
      .subscribe(() => this.router.navigate(["/api/threads/${idThread}"]));
  }
}
