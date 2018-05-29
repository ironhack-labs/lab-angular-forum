import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASEURL = "http://localhost:3000";

@Injectable()
export class SessionService {

  user:any;
  options: any = { withCredentials:true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    console.log("Error. Session")
    return Observable.throw(e.json().message);
  }

  handleUser(user?:object){
    this.user = user;
    console.log(this.user)
    return this.user;
  }

  signup(user) {
    return this.http.post(`${BASEURL}/api/signup`, user, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username, password) {
    // console.log("Login-service")
    return this.http.post(`${BASEURL}/api/login`, {username,password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASEURL}/api/logout`,this.options)
      .map(() => this.handleUser())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.post(`${BASEURL}/api/loggedin`, {}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

}