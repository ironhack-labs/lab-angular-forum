import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { IUser } from './../../interfaces/user.interface';
import { environment } from './../../../../environments/environment';

@Injectable()
export class AuthService {

  private user: IUser;
  private baseUrl = `${environment.apiUrl}/signup`;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) {}

  login(user: IUser): Observable<IUser> {
    this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), this.options)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  signup(user: IUser): Observable<IUser> {
    return this.http.post(`${this.baseUrl}/signup`, JSON.stringify(user), this.options)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  isAuthenticated(): boolean {
    return this.user !== null && this.user !== undefined;
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

}
