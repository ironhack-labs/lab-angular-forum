import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASEURL = 'http://localhost:3000';

@Injectable()
export class ThreadService {
options: any = { withCredentials: true };
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
  return this.http.post(`${BASEURL}/api/threads/`, thread, this.options)
  .map((res) => res.json())
}
handleError(e) {
  console.log(e)
  return Observable.throw(e.json().message);
}
getOneThread(id){
  return this.http.get(`${BASEURL}/api/threads/${id}`)
  .map((res) => res.json());
}
createReply(id, content){
  return this.http.post(`${BASEURL}/api/threads/${id}/replies`, {content}, this.options)
  .map((res) => res.json())
}


}

