import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";


@Injectable()
export class ForumService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
      .map((res) => res.json());
  }

  newThread(_author,title,content){
    return this.http
      .post(`${this.BASE_URL}/api/threads`, {_author,title,content})
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSingleThread(id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
      .map((res) => res.json());
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
}