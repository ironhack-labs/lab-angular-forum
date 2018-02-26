import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers, withCredentials: true });

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {}, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLogged() {
    return this.http.get(`${this.BASE_URL}/loggedin`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
