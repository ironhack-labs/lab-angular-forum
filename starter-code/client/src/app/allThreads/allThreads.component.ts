import { Component, OnInit } from '@angular/core';
import { GetThreadsService } from '../services/getThreads.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-allThreads',
  templateUrl: './allThreads.component.html',
  styleUrls: ['./allThreads.component.css']
})

export class AllThreadsComponent implements OnInit {
  threadsArray: Array<Object>;

  constructor(public threadListServ:GetThreadsService, public authService: AuthService) {
    this.threadListServ.getList().subscribe( list => { 
      this.threadsArray = list
      })
   }

  ngOnInit( ) {
  
  }

}
