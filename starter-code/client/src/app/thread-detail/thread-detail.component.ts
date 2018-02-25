import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ThreadsService } from '../../services/threads.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {

  thread:object;
  error:string;
  threadid: string;

  constructor(private session:SessionService, private route:ActivatedRoute, private threadService:ThreadsService) {
    route.params
    .mergeMap(t => this.threadService.getSingleThread(t.id) )
    .subscribe( thread => {this.thread=thread;});
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.threadid = params['threadId'];
    });
  }
  addReply(form)  {


    this.threadService.addReply(this.threadid,form.value)
      .subscribe(
        (reply) =>{
           console.log(reply);

         },
        (err) => this.error = err
      );
  }

}
