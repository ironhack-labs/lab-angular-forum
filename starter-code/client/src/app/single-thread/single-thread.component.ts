import { Component, OnInit } from "@angular/core";
import { ForumService } from "../../services/forum.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-thread",
  templateUrl: "./single-thread.component.html",
  styleUrls: ["./single-thread.component.css"]
})
export class SingleThreadComponent implements OnInit {

  thread;
  constructor(
    private forum: ForumService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => this.getThread(params["id"]))
  }
         
   getThread(id){
    this.forum.getSingleThread(id).subscribe( thread => {
      this.thread = thread;
      return thread;
    })
  }
}
