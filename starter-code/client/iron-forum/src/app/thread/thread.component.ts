import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread;
  constructor(public provider:ProviderService) { }

  ngOnInit() {
    this.provider.getAll().subscribe( e => {
      this.thread = e
      console.log(this.thread)
});
  }

}
