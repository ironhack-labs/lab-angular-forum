import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";
import {map} from "rxjs/operators"

const url = environment.BASEURL;

@Injectable({
  providedIn:"root"
})
export class ThreadsService {
  constructor(private http: Http) {}
  getAll() {
    return this.http.get(`${url}/api/threads`).pipe(
      map(res => res.json()));
  }
  getById(id: string) {
    return this.http.get(`${url}/api/threads/${id}`).pipe(
      map(res => res.json()))
  }
}