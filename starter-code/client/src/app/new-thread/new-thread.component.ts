import { Component, OnInit } from '@angular/core';
import { ForumService } from "../services/forum.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  threadInfo: any = {
    title: "",
    content: ""
  }
  error: string;
  errors: any;

  constructor(private forumService: ForumService, private router: Router) { }

  ngOnInit() {
  }

  newThread() {
    this.forumService.newThread(this.threadInfo)
      .subscribe(
      (thread) => { this.router.navigate(['']); },
      (err) => {
        this.errors = {};
        if(err.name == 'ValidationError' && err.errors){
          Object.keys(err.errors).forEach(key => { this.errors[err.errors[key].path] = err.errors[key].message } );
        } else {
          this.error = err.message;
        }
      });
  }
}
