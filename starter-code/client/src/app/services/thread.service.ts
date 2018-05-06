import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ThreadService {
  BASEURL = "http://localhost:3000";

  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASEURL}/api/threads`).map(res => res.json());
  }
}
