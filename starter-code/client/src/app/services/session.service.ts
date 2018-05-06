import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {
  BASEURL = 'http://localhost:3000';
  user: any;
  options: any = { withCredentials: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http
      .post(`${this.BASEURL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  login(user) {
    return this.http
      .post(`${this.BASEURL}/api/login`, user, this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .post(`${this.BASEURL}/api/logout`, {}, this.options)
      .map(res => res.json())
      .map(() => (this.user = null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .post(`${this.BASEURL}/api/loggedin`, {}, this.options)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }
}
