import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASEURL = 'http://localhost:3000';

@Injectable()
export class SessionService {

  user: any;
  options: object = {withCredentials:true};
  userEvent: EventEmitter<any> = new EventEmitter();


  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  handleUser(user?:object){
    this.user = user;
    // this.userEvent.emit(this.user);
    return this.user;
  }

  signup(user) {
    return this.http.post(`${BASEURL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username, password) {
    return this.http.post(`${BASEURL}/api/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.post(`${BASEURL}/api/loggedin`,{}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .post(`${BASEURL}/api/logout`, {}, this.options)
      .map(res => res.json())
      .map(() => this.handleUser())
      .catch(this.handleError);
  }

}