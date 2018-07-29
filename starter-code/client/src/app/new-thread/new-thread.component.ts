import { Component, OnInit } from '@angular/core';
import { AllthreadsService } from '../../services/allthreads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private AllthreadsService: AllthreadsService, private router: Router) { }

  ngOnInit() {
  }
newThread(title, content) {
  this.AllthreadsService.newThread(title, content).subscribe(() => {
    this.router.navigate(['/'])
  });
}
}
