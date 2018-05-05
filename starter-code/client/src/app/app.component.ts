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
    this.sessionService.userEvent.subscribe(user => {
      console.log('USER EVENT');
      if (user) {
        this.title = `HOLA ${user.username}`;
      } else {
        this.title = 'PLIZ LOGIARSE!';
      }
    });
  }
  logout() {
    this.sessionService.logout().subscribe();
  }
}
