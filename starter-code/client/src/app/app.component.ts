import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sessionService: SessionService) {}
  title = 'app';
  threads = [];

  logout(){
    this.sessionService.logout().subscribe();
  }
}
