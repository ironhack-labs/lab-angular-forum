import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { IThread } from './../interfaces/thread.interface';
import { environment } from './../../../environments/environment';


@Injectable()
export class ThreadService {
  private baseUrl = `${environment.apiUrl}/threads`;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) {}

  getThreads(): Observable<Array<IThread>> {
    return this.http.get(this.baseUrl, this.options)
      .map((res: Response) => res.json())
      .catch((error: Response | any) => this.handleError(error));
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
