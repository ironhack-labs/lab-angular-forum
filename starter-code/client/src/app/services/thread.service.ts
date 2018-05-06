import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';

@Injectable()
export class ThreadService {
  BASEURL: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASEURL}/api/threads`).map(res => res.json());
  }

  getThread(id) {
    return this.http
      .get(`${this.BASEURL}/api/threads/${id}`)
      .map(res => res.json());
  }

  newThread(content) {
    return this.http
      .post(`${this.BASEURL}/api/threads`, content)
      .map(res => res.json());
  }

  newReply(id, content) {
    return this.http
      .post(`${this.BASEURL}/api/threads/${id}/replies`, content)
      .map(res => res.json());
  }
}
