import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-threadsOne',
  templateUrl: './threadsOne.component.html',
  styleUrls: ['./threadsOne.component.css']
})
export class ThreadsOneComponent implements OnInit {
thread: any;
reply = {
  title: "",
  content: ""
}
  constructor( private requestService: RequestService, public authService: AuthService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.requestService.threadsOne(params.id)
      .subscribe( thread => this.thread = thread );
    })
  }
  addReply(id) {
    this.requestService.addReply(id, this.reply).subscribe( thread => this.thread = thread)

  }

}

