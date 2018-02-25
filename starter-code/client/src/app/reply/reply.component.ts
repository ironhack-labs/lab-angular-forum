import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  id:string;
  _author: any;
  content:string;
  error:string;

  constructor(
    private forum: ForumService, 
    private session: SessionService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params["id"])
  }
  newReply() {
    this.forum
      .newReply(this.id,this.session.getUser()._id, this.content)
      .subscribe(data => data, err => (this.error = err));
  }

}
