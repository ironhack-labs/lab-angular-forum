import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  thread;
  constructor(public provider:ProviderService) { }

  ngOnInit() {
  }
  create(form){
    const title=form.title;
    const content=form.content;

    this.provider.create(title,content).subscribe( e => {
      this.thread = e
});
  }

}
