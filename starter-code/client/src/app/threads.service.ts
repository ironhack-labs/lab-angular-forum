import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable()
export class ThreadsService {
  options: any = { withCredentials: true };
  loggedIn: any;
  BASE_URL: string = 'http://localhost:3000';
  constructor(
    private http: Http,
    public sessionService: SessionService,
    private router: Router
  ) {}

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`).map(res => res.json());
  }

  getOneThread (id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`).map(res => res.json());
  }

  postThread(title: string, content: string) {
    console.log(title, content);
    const thread = {
      user: this.sessionService.user.id,
      title: title,
      content: content
    };
    console.log(thread);
    return this.http
      .post(`${this.BASE_URL}/api/threads`, thread, this.options)
      .map(res => {
        res.json();
        this.router.navigate(['/']);
      });
  }
}
