import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ForumService} from '../../service/forum.service';

@Component({
  selector: 'app-list-threads',
  templateUrl: './list-threads.component.html',
  styleUrls: ['./list-threads.component.css']
})
export class ListThreadsComponent implements OnInit {


  th:Array<any>;

  constructor(public fs:ForumService) {
    this.fs.getList().subscribe(th=> this.th = th);
   }

  ngOnInit() {
  }

}
