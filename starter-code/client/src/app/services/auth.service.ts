import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  
  BASE_URL: string = "http://localhost:3000";
  user: Object;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: Object = { withCredentials: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  handleUser(user?: object) {
    this.user = user;
    this.userEvent.emit(this.user);
    return this.user;
  }

  signUp(user) {
    return this.http
      .post(`${this.BASE_URL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logIn(user) {
    return this.http
      .post(`${this.BASE_URL}/api/login`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logOut() {
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