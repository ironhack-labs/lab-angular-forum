import { Component } from '@angular/core';
import { ThreadsService} from '../services/threads-service';
import { SessionService } from '../services/session-service';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public threadService: ThreadsService, public sessionService: SessionService){}

  ngOnInit(){
  }

  logout(){
    this.sessionService.logout().subscribe()
  }
}
