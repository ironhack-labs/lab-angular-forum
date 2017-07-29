import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class ThreadsService {
  BASE_URL:string = environment.baseURL;
  options:object = {withCredentials:true};

  constructor (private http: Http) { }

  getThreads() {
     return this.http.get(`${this.BASE_URL}/api/threads`)
       .map((res) => res.json());
   }

  addNew(thread) {
    console.log(thread)
    return this.http.post(`${this.BASE_URL}/api/threads`, thread, this.options)
      .map((res) => res.json());
  }

  getSingleThread(id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
      .map((res) => res.json());
  }

  addReply(id, reply) {
    console.log(id, reply)
    return this.http.post(`${this.BASE_URL}/api/threads/${id}/replies`, {content: reply}, this.options)
      .map((res) => res.json());
  }
}
