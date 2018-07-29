import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThreadService, Thread } from '../../services/thread.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css'],
  providers: [ThreadService]
})
export class RepliesComponent implements OnInit {
  error: string = "";
  @Input() replies: Array<Thread>;
  @Input() threadId: string;
  @Output() onRepliesUpdate = new EventEmitter<string>();

  constructor(private threadServ: ThreadService, private sessionService: SessionService) { }

  ngOnInit() {
  }

  saveReply(form) {
    if (!form.controls.content.errors) {
      this.error = "";

      this.threadServ.newReply(this.threadId, form.value.content).subscribe(thread => {
        form.reset();
        this.onRepliesUpdate.emit(this.threadId);
      });
    } else {
      this.error = "Content field is required.";
    }
  }

}
