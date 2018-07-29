import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";

import { map, catchError } from "rxjs/operators";
import { Observable } from "../../node_modules/rxjs";

const { BASEURL } = environment;

@Injectable({
  providedIn: "root"
})
export class ThreadsService {
  options: object = { withCredentials: true };
  constructor(private http: Http) {}

  getThreadList() {
    return this.http
      .get(`${BASEURL}/api/threads`, this.options)
      .pipe(map(res => res.json()));
  }

  createNewThread(title: string, content: string) {
    return this.http
      .post(`${BASEURL}/api/threads/new`, { title, content }, this.options)
      .pipe(map(res => res.json()));
  }
}
