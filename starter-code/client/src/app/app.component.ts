import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElForUm';
  constructor(public sessionService: SessionService) {
    this.sessionService.userEvent.subscribe();
  }
}
