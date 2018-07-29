import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";
import { map } from "rxjs/operators";

const url = environment.BASEURL;

@Injectable({
  providedIn: "root"
})
export class ThreadsService {
  options: object = { withCredentials: true };
  constructor(private http: Http) {}
  getAll() {
    return this.http
      .get(`${url}/api/threads`, this.options)
      .pipe(map(res => res.json()));
  }
  createThread(title: string, content: string) {
    return this.http
      .post(`${url}/api/threads/new`, { title, content }, this.options)
      .pipe(map(res => res.json()));
  }
  getById(id: string) {
    return this.http
      .get(`${url}/api/threads/${id}`, this.options)
      .pipe(map(res => res.json()));
  }
  reply(id: string, content: string) {
    return this.http
      .post(`${url}/api/threads/${id}/replies`, { content }, this.options)
      .pipe(map(res => res.json()));
  }
}
