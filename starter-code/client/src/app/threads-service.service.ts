import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

const BASEURL = "http://localhost:3000/api";

@Injectable()
export class ThreadsServiceService {

  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  getAllThreads() {
    return this.http.get(`${BASEURL}/threads`).map(res => {
      return res.json();
    });
  }

  newThread(thread) {
    console.log("here",thread)
    return this.http.post(`${BASEURL}/threads`, thread, this.options).map(res => {
      return res.json();
    });
  }
}
