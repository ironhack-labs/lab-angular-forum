import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-threadsNew',
  templateUrl: './threadsNew.component.html',
  styleUrls: ['./threadsNew.component.css']
})
export class ThreadsNewComponent implements OnInit {

  threadInfo = {
    title: "",
    content: ""
  }

  constructor(public requestService: RequestService, public router: Router) { }

  ngOnInit() {
  }
  threadsNew(){
    this.requestService.threadsNew(this.threadInfo).subscribe( () => this.router.navigate(["/home"]))
  }

}
