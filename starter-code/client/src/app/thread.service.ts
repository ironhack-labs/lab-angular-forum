import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASEURL = 'http://localhost:3000';

@Injectable()
export class ThreadService {

constructor(private http: Http) { }

getThreads(){
  return this.http.get(`${BASEURL}/api/threads/`)
    .map((res) => res.json());
}
createThread(title, content){
  const thread = {
    title,
    content
  }
  console.log(thread)
  return this.http.post(`${BASEURL}/api/threads/`, {thread})
  .map((res) => res.json())
}
handleError(e) {
  console.log(e)
  return Observable.throw(e.json().message);
}

}

