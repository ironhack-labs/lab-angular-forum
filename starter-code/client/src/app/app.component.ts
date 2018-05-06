import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "./session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My primer foro';
  constructor(public session: SessionService) {
    this.session.userEvent.subscribe(user => {
      console.log("USER EVENT");
      if (user) {
        this.title = `HOLA ${user.username}`;
      } else {
        this.title = "LOGIARSE!";
      }
    });
  }

  ngOnInit() {}
}
