import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
const { BASEURL } = environment;

export interface Thread {
  _author?: object,
  title: string,
  content: string,
  date?: Date,
  replies?: Array<object>
}

@Injectable()
export class ThreadService {

  options: object = { withCredentials: true };

  constructor(private http: Http) {

  }

  getThreads(): Observable<Array<Thread>> {
    return this.http.get(`${BASEURL}/api/threads`).pipe(
      map((res: Response) => {
        return res.json();
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  getThread(id): Observable<Thread> {
    return this.http.get(`${BASEURL}/api/threads/${id}`).pipe(
      map((res: Response) => {
        return res.json();
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  newThread(thread: Thread): Observable<Thread> {
    return this.http.post(`${BASEURL}/api/threads`, thread, this.options).pipe(
      map((res: Response) => {
        return res.json();
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  handleError(error){
    console.log('ThreadServiceError')
    console.log(error.message);
    console.log(error);
    return error;
  }
}