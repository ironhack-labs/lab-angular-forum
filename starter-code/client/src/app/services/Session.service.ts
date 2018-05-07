import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { EventEmitter } from '@angular/core';

@Injectable()
export class SessionService {
    BASE_URL: string = "http://localhost:3000";
  user: any;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };


constructor(private http: Http) {
    this.isLoggedIn().subscribe();
 }

 handleError(e) {
    return Observable.throw(e.json().message);
  }

  handleUser(user?:object){
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }

  signup(user) {
    return this.http
      .post(`${this.BASE_URL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(user) {
    return this.http
      .post(`${this.BASE_URL}/api/login`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .post(`${this.BASE_URL}/api/logout`, {}, this.options)
      .map(res => res.json())
      .map(() => this.handleUser())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .post(`${this.BASE_URL}/api/loggedin`, {}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

}
