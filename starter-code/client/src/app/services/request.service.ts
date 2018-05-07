import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RequestService {
  BASE_URL: string = "http://localhost:3000/api";
  constructor(private http: Http) {}
  getThreadsList() {
    return this.http
      .get(`${this.BASE_URL}/threads`)
      .map((res: Response) => res.json());
  }
}
