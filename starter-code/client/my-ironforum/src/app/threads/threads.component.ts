import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ThreadsService } from '../services/threads.service';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads:Array<any> = [];

  constructor(public threadsService:ThreadsService,public session: SessionService) {
   
  }

  ngOnInit() {
    this.threadsService.getThreads().subscribe( threads => this.threads = threads);
  }

}


