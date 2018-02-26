import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {

  threads:Observable<Array<Object>>

  constructor(private threadsservice:ThreadsService) { }

  ngOnInit() {
    this.threads = this.threadsservice.getList();
  }

}