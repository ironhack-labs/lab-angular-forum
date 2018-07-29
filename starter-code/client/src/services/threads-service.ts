import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";
import { map } from "rxjs/operators";

const {BASEURL} = environment;

@Injectable()
export class ThreadsService {
  options: object = { withCredentials: true };  //por qué se usa?

  constructor(private http: Http) {}

  getAll() {
    return this.http
      .get(`${BASEURL}/api/threads`, this.options)  // this.options? no me acuerdo de la explicación
      .pipe(map(res => res.json()));
  }

  // getById(id: string) {
  //   return this.http
  //     .get(`${BASEURL}/api/threads/${id}`, this.options)
  //     .pipe(map(res => res.json()));
  // }

  // createThread(title: string, content: string) {
  //   return this.http
  //     .post(`${BASEURL}/api/threads/new`, { title, content }, this.options)
  //     .pipe(map(res => res.json()));
  // }

  // reply(id: string, content: string) {
  //   return this.http
  //     .post(`${BASEURL}/api/threads/${id}/replies`, { content }, this.options)
  //     .pipe(map(res => res.json()));
  // }
}