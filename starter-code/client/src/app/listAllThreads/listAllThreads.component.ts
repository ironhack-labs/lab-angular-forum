import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Threads  } from '../threads-interface';
import { ActivatedRoute } from "@angular/router";
import { promised } from "q";



@Component({
  selector: 'app-listAllThreads',
  templateUrl: './listAllThreads.component.html',
  styleUrls: ['./listAllThreads.component.css'],
  providers: [SessionService],

})
export class ListAllThreadsComponent implements OnInit {
  threads: Array <Threads> 

  constructor(
    private dishesService: SessionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dishesService.GetThreads()
    .subscribe((data) => this.threads = data)
  
  } 
}
