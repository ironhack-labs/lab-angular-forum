import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Forum';

  constructor(private sS : SessionService, private router : Router){}

  logout(){
    this.sS.logout().subscribe(() =>{
      this.router.navigate(['/']);
    });
  }
}
