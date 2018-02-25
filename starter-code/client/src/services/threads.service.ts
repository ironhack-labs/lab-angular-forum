import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
      .map((res) => res.json());
  }

  create(entry) {
    return this.http.post(`${this.BASE_URL}/api/threads`, entry)
      .map((res) => res.json());
  }
}
