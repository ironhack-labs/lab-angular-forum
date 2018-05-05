import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = "http://localhost:3000";
  user: any;

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    return Observable.throw(e.json().message);    
  }

  signup(user) {
    return this.http
      .post(`${this.BASE_URL}/api/signup`, user)
      .map(res => res.json())
      .map(user => (this.user = user))
      .catch(this.handleError);
  }

  login(user) {
    return this.http
    .post(`${this.BASE_URL}/api/login`, user )
    .map( res => res.json() ) 
    .map( user => this.user = user )
    .catch( this.handleError );
  }

  logout() {
    return this.http
    .post(`${this.BASE_URL}/api/logout`, {})
    .map( res => res.json() )
    .map( () => this.user = null )
    .catch( this.handleError );
  }

  isLoggedIn() {
    return this.http
    .post(`${this.BASE_URL}/api/loggedin`, {})
    .map( res => res.json() )
    .map( user => this.user = user )
    .catch( this.handleError );
  }
}
