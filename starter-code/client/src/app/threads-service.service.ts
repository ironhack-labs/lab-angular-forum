import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

const BASEURL = "http://localhost:3000/api";

@Injectable()
export class ThreadsServiceService {
  constructor(private http: Http) {}

  getAllThreads() {
    return this.http.get(`${BASEURL}/threads`).map(res => {
      return res.json();
    });
  }
}
