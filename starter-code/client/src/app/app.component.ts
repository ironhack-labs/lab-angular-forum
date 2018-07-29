import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ThreadsService } from '../services/threads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'app';

  constructor(public tS: ThreadsService , public sS: SessionService){}
  
  ngOnInit(){
  }
  
  logout(){
    this.sS.logout().subscribe()
  }
}