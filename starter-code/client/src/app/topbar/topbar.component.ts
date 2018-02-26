import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

error;

  constructor(private session:SessionService) { }

  ngOnInit() {
  }

  logout(){
    this.session.logout().catch(e => this.error = e).subscribe();
  }

}
