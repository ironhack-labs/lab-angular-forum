import { Component, OnInit } from "@angular/core";
import { ThreadsService } from '../../services/threads';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: "app-new-thread",
  templateUrl: "./new-thread.component.html",
  styleUrls: ["./new-thread.component.css"]
})
export class NewThreadComponent implements OnInit {
  constructor(public threadService: ThreadsService, private router: Router) {}
  ngOnInit() {}
  createNewThread(title, content) {
    this.threadService.createNewThread(title, content).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
}
