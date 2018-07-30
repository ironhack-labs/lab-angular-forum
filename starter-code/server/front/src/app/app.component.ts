import { Component } from '@angular/core';
import { SessionService } from '../services/sessions';
import { HttpModule } from '@angular/http';
import { ThreadsService } from '../services/threads';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public threadService: ThreadsService ,public sessionService:SessionService) { }

  logout(){
    this.sessionService.logout().subscribe();
  }
}
