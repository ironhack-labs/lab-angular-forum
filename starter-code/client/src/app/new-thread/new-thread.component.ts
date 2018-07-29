import { Component, OnInit } from '@angular/core';
import { ThreadService, Thread } from '../../services/thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css'],
  providers: [ThreadService]
})
export class NewThreadComponent implements OnInit {
  error: string = "";

  constructor(private threadServ: ThreadService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    if (!form.controls.title.errors && !form.controls.content.errors) {
      this.error = "";

      const newThread: Thread = {
        title: form.value.title,
        content: form.value.content
      };

      this.threadServ.newThread(newThread).subscribe(thread => {
        this.router.navigate(['/']);
      });
    } else {
      this.error = "All fields are required.";
    }
  }

}
