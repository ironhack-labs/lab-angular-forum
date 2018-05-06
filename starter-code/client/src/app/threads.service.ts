import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { Threads } from "./threads-interface";


const BASEURL = "http://localhost:3000";

@Injectable()
export class SessionService {
  user: object;
  userEvent: EventEmitter<any> =  new EventEmitter();
  options: any = { withCredentials: true };

  constructor(private http: Http) {

  }

  GetThreads() {
    return this.http
      .get(`${BASEURL}/api/threads`)
      .map((res: Response) => res.json());
  }
}
