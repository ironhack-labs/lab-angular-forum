import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ForumService } from "../services/forum.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error:string;
  
  constructor(public session:ForumService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe();
    console.log(this.session.getUser());
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
