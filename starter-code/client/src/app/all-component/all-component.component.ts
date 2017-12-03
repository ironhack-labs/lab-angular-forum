import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/service';
import {Thread } from '../models/usermodel';

@Component({
  selector: 'app-all-component',
  templateUrl: './all-component.component.html',
  styleUrls: ['./all-component.component.css']
})
export class AllComponentComponent implements OnInit {

  constructor(public allThreads:ForumService) { }

myThreads: any;
  ngOnInit() {
    this.allThreads.getAllThreads().subscribe( list =>{
     this.myThreads = list;
   });
  }

}
