import { Injectable } from '../../node_modules/@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



const BASEURL = environment.BASEURL;

@Injectable()


export class AllthreadsService {

  options: object = {withCredentials: true};

  constructor(private http: Http) {}

  getThreads() {
   return this.http.get(`${BASEURL}/api/threads`).map(res => {
     const threads = res.json();
     console.log(threads);
     return threads;
   });
  }
  newThread(title: String, content: String): Observable<Object> {
    return this.http.post(`${BASEURL}/api/threads`, {title, content}, this.options).pipe(map( (res: Response) => {
        let thread = res.json();
        this.newThread = thread;
        console.log(this.newThread);
        return this.newThread;
      }));
    }
  getThread(id) {
    return this.http.get(`${BASEURL}/api/threads/${id}`).map(res => res.json());
  }
  

  replyThread(id, content) {
    return this.http.post(`${BASEURL}/api/threads/${id}/replies`, { content }, this.options).pipe(map( (res: Response) => {
      let reply = res.json();
      this.replyThread = reply;
      console.log(this.replyThread);
      return this.replyThread;
    }));
  }
}
