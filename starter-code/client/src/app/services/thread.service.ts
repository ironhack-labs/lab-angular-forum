import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { tap } from 'rxjs/operators';

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: object;

  options: object = {withCredentials: true};

  constructor(public http: HttpClient) {
    this.getAll().subscribe();
  }

  getAll() {
    return this.http.get(`${BASEURL}/api/threads`).pipe(
      tap(data => this.threads = data),
    );
  }

  createThread(thread: object) {
    return this.http.post(`${BASEURL}/api/threads`, thread, this.options).pipe(
      tap(data => this.getAll()),
    );
  }

  getById(id) {
    return this.http.get(`${BASEURL}/api/threads/${id}`, this.options);
  }

  addReply(id: string, content: string) {
    return this.http.post(`${BASEURL}/api/threads/${id}/replies`, {content}, this.options);
  }
}
