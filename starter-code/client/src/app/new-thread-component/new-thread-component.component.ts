import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadService } from '../../services/Threads.services';
import { AuthenticationService } from '../../services/Authentication.services';

@Component({
  selector: 'app-new-thread-component',
  templateUrl: './new-thread-component.component.html',
  styleUrls: ['./new-thread-component.component.css']
})
export class NewThreadComponentComponent implements OnInit {
  title:string;
  content:string;
  error:string;
  constructor(public router:Router, 
              public thread:ThreadService, 
              public session: AuthenticationService)
              { 

              }

  ngOnInit() {
  }

  addThread(){
    this.thread.addThread(this.title,this.content,this.session.getUser()._id)
    .catch(e => this.error = e)
    .subscribe(()=> this.router.navigate(['/']));
  }

}
