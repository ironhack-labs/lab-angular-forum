import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../../services/Threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private ThreadsService: ThreadsService, private router: Router) { }

  ngOnInit() {
  }

  addNew(form) {
    console.log(form.value)
    this.ThreadsService.addNew(form.value)
      .subscribe(
      (thread) => {
        console.log(thread)
        this.router.navigate([''])
      },
      (err) => console.error(err)
      );
  }
}
