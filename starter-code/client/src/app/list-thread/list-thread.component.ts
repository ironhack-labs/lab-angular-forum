import { Component, OnInit } from '@angular/core';
import { ThreadsServices } from '../../services/threads.service';
interface Threads {
  _author: string;
  title: string;
  content: string;
  date: Date;
}
@Component({
  selector: 'app-list-thread',
  templateUrl: './list-thread.component.html',
  styleUrls: ['./list-thread.component.css']
})
export class ListThreadComponent implements OnInit {
threadList: Array<Threads>;


  constructor(public tS: ThreadsServices) {
    this.tS.getList().subscribe(list => {this.threadList = list;
      console.log(typeof(list));
    });
   }

  ngOnInit() {
  }

}
