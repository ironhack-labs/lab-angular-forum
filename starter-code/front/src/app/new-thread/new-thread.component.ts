import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(public tS:ThreadsService,public router:Router) { }

  ngOnInit() {
  }

  add(title,content){
    this.tS.addThread(title,content).subscribe(e=>{
      this.router.navigate(["/"])
    })
  }

}
