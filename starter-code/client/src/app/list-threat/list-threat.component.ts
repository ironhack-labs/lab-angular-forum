import { Component, OnInit } from '@angular/core';
import { ForumService } from "../../services/forum.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-threat',
  templateUrl: './list-threat.component.html',
  styleUrls: ['./list-threat.component.css']
})
export class ListThreatComponent implements OnInit {

  threads: Array<any>;

  constructor(public Fs: ForumService) {
    this.Fs.getThreads().subscribe(threads => this.threads = threads);
  }

  ngOnInit() {
  }

}
