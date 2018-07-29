import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


const BASEURL = environment.BASEURL;

interface UserObject {
  username: String;
  mail: String;
  password: String;
}


@Injectable()
export class AuthenticationService {

user: UserObject;
options: Object = {withCredentials: true};

  constructor(private http: Http) {
    this.isLogged().subscribe();
  }

  isLogged(): Observable<UserObject> {
    return this.http.get(`${BASEURL}/api/loggedin`, this.options).pipe(map( (res: Response) => {
      this.user = res.json();
      console.log('Automatically login ${this.user.username}');
      return this.user;
    }));
}

  signup(username: string, email: string, password: string): Observable<object> {
  return this.http.post(`${BASEURL}/api/signup`, { username, email, password }, this.options).pipe(map( (res: Response) => {
      this.user = res.json();
      console.log(this.user);
      return this.user;
    }));
}


login(username: string, password: string): Observable<object>{
  return this.http.post(`${BASEURL}/api/login`, { username, password }, this.options).pipe(map( (res: Response) => {
      let user = res.json();
      this.user = user;
      return this.user;
    }));
}



  logout() {
    return this.http.get(`${BASEURL}/api/logout`, this.options).pipe(map( (res: Response) => { this.user = null }));
    }
}
