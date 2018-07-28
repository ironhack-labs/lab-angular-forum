import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { AllthreadsService } from '../../services/allthreads.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
threads: Observable<Array<object>>;

  constructor(public thread: AllthreadsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.thread.getThreads().subscribe((threads) => {
      this.threads = threads;
    });
  }

}
