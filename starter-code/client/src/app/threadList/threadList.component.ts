import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service'

@Component({
  selector: 'app-threadList',
  templateUrl: './threadList.component.html',
  styleUrls: ['./threadList.component.css'],
  providers: [RequestService]
})
export class ThreadListComponent implements OnInit {

  threads: Array<any>;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getThreadsList().subscribe(threads => {
      this.threads  = threads
    })
  }

}
