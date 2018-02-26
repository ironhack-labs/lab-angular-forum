import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {
  BASE_URL = 'http://localhost:3000';
  options: object = { withCredentials: true };
  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`,
    this.options)
      .map((res) => res.json());
  }

  create(title, content) {
    console.log('create: ' + title, content);
    return this.http.post(`${this.BASE_URL}/api/threads`, {title, content},
    this.options)
      .map((res) => res.json());
  }

  update(content, id) {
    console.log('create: ' + content);
    return this.http.post(`${this.BASE_URL}/api/threads/${id}/replies`, {content},
    this.options)
      .map((res) => res.json());
  }
}
