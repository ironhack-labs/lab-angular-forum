import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElForUm';
  constructor(public sessionService: SessionService, public router: Router) {
    this.sessionService.userEvent.subscribe();
  }
}
