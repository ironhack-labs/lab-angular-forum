import { Component, OnInit } from '@angular/core';
import { threadsService } from '../threads.service';
import { Threads  } from '../threads-interface';
import { ActivatedRoute } from "@angular/router";
import { promised } from "q";

@Component({
  selector: 'app-listAllThreads',
  templateUrl: './listAllThreads.component.html',
  styleUrls: ['./listAllThreads.component.css'],
  providers: [threadsService],

})
export class ListAllThreadsComponent implements OnInit {
  threads: Array <Threads> 

  constructor(
    private threadsService: threadsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.threadsService.getThreads()
    .subscribe((data) => this.threads = data)
  
  } 
}
