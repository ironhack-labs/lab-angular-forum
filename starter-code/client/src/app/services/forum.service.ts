import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers, withCredentials: true });

@Injectable()
export class ForumService {
  BASE_URL: string = 'http://localhost:3000/api/threads';
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json());
  }

  get() {
    return this.http.get(`${this.BASE_URL}`, options)
      .map(threads => threads.json())
      .catch(this.handleError);
  }

  getThread(id) {
    return this.http.get(`${this.BASE_URL}/${id}`, options)
      .map(thread => thread.json())
      .catch(this.handleError);
  }

  newThread(threadInfo: any) {
    return this.http.post(`${this.BASE_URL}`, { title: threadInfo.title, content: threadInfo.content}, options)
      .map(thread => thread.json())
      .catch(this.handleError);
  }

  newReply(threadId: string, replyInfo: any) {
    return this.http.post(`${this.BASE_URL}/${threadId}/replies`, { content: replyInfo.content }, options)
      .map(user => user.json())
      .catch(this.handleError);
  }
}
