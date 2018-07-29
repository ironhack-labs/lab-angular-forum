import {Injectable} from '@angular/core'
import { Http } from '@angular/http';
import {map} from "rxjs/operators";



@Injectable()
export class threadService {

  options:object = {withCredentials:true};

  constructor(public http : Http){
  }
  
  getThreads(){
    return this.http
      .get("http://localhost:3000/api/threads", this.options)
      .pipe(map((res:Response) => res.json()))
  }
  createThread(thread){
    return this.http
      .post(`http://localhost:3000/api/threads`, thread, this.options).pipe(
      map(res => {
        console.log(res);
        return res.json();
      }))
  }
  getOneThread(id){
    return this.http
      .get(`http://localhost:3000/api/threads/${id}`, this.options)
      .pipe(map((res:Response) => res.json()))
  }
  addReply(id, reply){
    return this.http
      .post(`http://localhost:3000/api/threads/${id}/replies`, reply, this.options).pipe(
      map(res => {
        console.log(res);
        return res.json();
      }))
  }
}