import { Component } from '@angular/core';
import { SessionService } from "./services/session.service";
import { Observable } from "rxjs/Rx";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My primer foro';
  constructor(public sessionService: SessionService) {
    this.sessionService.userEvent.subscribe(user => {
      console.log("USER EVENT");
      if (user) {
        this.title = `HOLA ${user.username}`;
      } else {
        this.title = "PLIZ LOGIARSE!";
      }
    });
  }

  ngOnInit() {}

}

