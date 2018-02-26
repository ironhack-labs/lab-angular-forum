import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../service/getThreats.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  threatsList:Array<any>;
  
  constructor(public tS:ThreadsService) { 
    this.tS.getList().subscribe(list => this.threatsList = list);
  }

  ngOnInit() {
  }

}
