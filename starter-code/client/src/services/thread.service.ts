import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";
import { map } from "rxjs/operators";

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: "root"
})

export class ThreadService {
  options: object = { withCredentials: true };
  
  constructor(public http: Http) {}

  getAll() {
    return this.http.get(`${BASEURL}/api/threads`).pipe(map(res => res.json()));
  }

  getById(id: string){
    return this.http.get(`${BASEURL}/api/threads/${id}`, this.options).pipe(map(res => res.json()));
  }

  newThread(title: string, content: string) {
    return this.http.post(`${BASEURL}/api/threads/new`, {title, content}, this.options)
      .pipe(map(res => res.json()));
  }

  reply(id: string, content: string) {
    return this.http
      .post(`${BASEURL}/api/threads/${id}/replies`, {content}, this.options)
      .pipe(map(res => res.json()));
  }
}