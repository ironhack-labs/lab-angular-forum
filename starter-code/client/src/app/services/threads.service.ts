import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import {map,catchError} from 'rxjs/operators'
import { Observable } from "rxjs";
import { of } from "rxjs";
import { environment } from "../../environments/environment";
import { SessionService } from "./session.service";
import { Router } from "@angular/router";

const { BASEURL } = environment;

@Injectable()
export class ThreadService {
  options: any = { withCredentials: true };

  constructor(
    private http: Http,
    public sessionService: SessionService,
    public router: Router
  ) {}

  errorHandler(e) {
    console.log("SessionServiceError");
    console.log(e.message);
    console.log(e);
    return e;
  }

  getThreads() {
    return this.http.get(`${BASEURL}/api/threads`).pipe(map(res => {
      return res.json();
    }),
     ) }

  newThread(title, content) {
    console.log(title);
    console.log(content);
    return this.http
      .post(`${BASEURL}/api/threads`, { title, content }, this.options)
      .pipe(map(res => {
        res.json();
        this.router.navigate(["/"]);
      }),
        )  }

  
}