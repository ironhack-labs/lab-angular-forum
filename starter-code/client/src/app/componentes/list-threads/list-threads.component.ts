import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../servicios/threads.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-threads',
  templateUrl: './list-threads.component.html',
  styleUrls: ['./list-threads.component.css']
})
export class ListThreadsComponent implements OnInit {
  threads:Array<any>=[];
  constructor(public sesionThreads: ThreadsService, public router: Router) { }

  ngOnInit() {
    this.sesionThreads.getThreads().subscribe((threads) => {
      this.threads = threads;
  })

}
}

