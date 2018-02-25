import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ThreadService {
    BASE_URL: string = 'http://localhost:3000';
    options: object = { withCredentials: true };
    constructor(private http: Http) {}

    handleError(e) {
        console.log(e);
        return Observable.throw(e.json().message);
      }

    getThreads() {
        return this.http.get(`${this.BASE_URL}/api/threads`)
          .map((res) => res.json());
      }

    addThread(title: string, content:string, id:string): Observable<any> {
            return this.http.post(`${this.BASE_URL}/api/threads`, { title, content, id }, this.options)
              .map(res => res.json())
              .catch(this.handleError);
          }
    }
}