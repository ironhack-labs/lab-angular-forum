import { Component, OnInit } from '@angular/core';
import { GetThreadsService } from '../services/getThreads.service';

@Component({
  selector: 'app-allThreads',
  templateUrl: './allThreads.component.html',
  styleUrls: ['./allThreads.component.css']
})

export class AllThreadsComponent implements OnInit {
  threadsArray: Array<Object>;

  constructor(public threadListServ:GetThreadsService) {
    this.threadListServ.getList().subscribe( list => { 
      this.threadsArray = list
      })
   }

  ngOnInit( ) {
  
  }

}
