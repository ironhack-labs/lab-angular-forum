import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ThreadsService {
  BASE_URL: string = "http://localhost:3000";
  user: any;
  thread: any;
  constructor(private http: Http) {}
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`).map(res => res.json());
  }
  signup(user) {
    return this.http
      .post(`${this.BASE_URL}/api/signup`, user)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  login(user) {
    return this.http
      .post(`${this.BASE_URL}/api/login`, user)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }
  tnew(thread) {
    return this.http
      .post(`${this.BASE_URL}/api/threads`, thread)
      .map(res => res.json())
      .catch(this.handleError);
  }
  getOneThread(idThread) {
    return this.http
      .get(`${this.BASE_URL}/api/threads/${idThread}`)
      .map(res => res.json());
  }
}
