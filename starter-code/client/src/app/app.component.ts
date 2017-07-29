import { Component } from '@angular/core';
import { SessionService } from '../services/Session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private session: SessionService, private router: Router) { }

  logout(){
    this.session.logout().subscribe();
    this.router.navigate(['/'])
  }

}
