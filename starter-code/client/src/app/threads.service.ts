import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

const BASE_URL = "http://localhost:3000";

@Injectable()
export class ThreadsService {
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  getThread() {
    return this.http.get(`${BASE_URL}/api/threads/`).map(res => res.json());
  }
}
