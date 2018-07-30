import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Http, Response } from '@angular/http';

interface UserObject {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  user: UserObject;

  options: object = {withCredentials: true};

  constructor(public http: Http) {
    this.isLogged().subscribe();
   }

  signUp(user) {
    const data = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return this.http.post(`http://localhost:3000/api/signup`, data, this.options).pipe(
      map( (res:Response) => {
        const data = res.json();
        this.user = data.user;
        return this.user;
      })
  );
}

  login(username, password) {
    return this.http.post(`http://localhost:3000/api/login`, {username, password}, this.options).pipe(
      map( (res:Response) => {
        const user = res.json();
        this.user = user;
        return this.user;
      })
    );
  }
   isLogged() {
       return this.http.get(`http://localhost:3000/api/loggedin`, this.options).pipe(
         map( (res:Response) => {
           const user = res.json();
           this.user = user;
           return this.user;
         })
      );
   }
  logout() {
    return this.http.get(`http://localhost:3000/api/logout`, this.options).pipe(
        map( (res:Response) => {
          this.user = null;
          console.log(this.user);
        })
      );
  }
  handleError(e) {
    console.log('SessionServiceError');
    console.log(e.message);
    console.log(e);
    return e;
  }
}
