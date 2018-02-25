import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../services/Threads.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listThreads: any;
  
  constructor(public threads: ThreadService) {
    this.threads.getThreads().subscribe(list => this.listThreads = list)
  }

  ngOnInit() {
  }

}