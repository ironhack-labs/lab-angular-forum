import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../../../interfaces/Tread';
import { ThreadsService } from '../../../services/threads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newThread',
  templateUrl: './newThread.component.html',
  styleUrls: ['./newThread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private threadsService: ThreadsService, private router: Router) { }
  thisThread: Thread;

  ngOnInit() {
  }

  submitForm(thread: any){
    this.threadsService.sendThread(thread.value).subscribe();
    this.threadsService.enableNewThreadForm = false;
  }

  cancelForm(){
    this.threadsService.enableNewThreadForm = false;
  }
}
