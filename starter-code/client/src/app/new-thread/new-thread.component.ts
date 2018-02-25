import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ThreadsService } from '../../services/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  error:string;

  constructor(private session:SessionService, private threadService: ThreadsService, public router:Router) { }

  ngOnInit() {
  }

  addThread(form)  {
    this.threadService.addNew(form.value)
      .subscribe(
        (thread) =>{
           console.log(thread);
           this.router.navigate(['/'])
         },
        (err) => this.error = err
      );
  }

}
