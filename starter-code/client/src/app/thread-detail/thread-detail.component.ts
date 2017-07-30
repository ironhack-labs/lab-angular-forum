import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadsService } from '../../services/threads.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.css']
})
export class ThreadDetailComponent implements OnInit {
  thread:object;
  error:string;
  constructor(private session:SessionService,private route:ActivatedRoute, private threadService:ThreadsService) {
    route.params
  .mergeMap( t => this.threadService.getSingleThread(t.id) )
  .subscribe( thread => {

    this.thread=thread;
  });


}

  ngOnInit() {
  }
  addReply(form)  {
    console.log(this.route.params);
    console.log(form.value);
    /*this.threadService.addReply(,form.value)
      .subscribe(
        (reply) =>{
           console.log(reply);

         },
        (err) => this.error = err
      );
  }*/
}
}
