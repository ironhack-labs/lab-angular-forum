import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Http, Response } from '@angular/http';

import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const BASEURL = environment.BASEURL;



@Injectable()
export class SessionService {

  user: User;
  options: object = {withCredentials: true};

  constructor(private http: Http) {
    this.isLogged().subscribe();
  }

  isLogged(): Observable<User>{
    return this.http.get(`${BASEURL}/api/loggedin`, this.options).pipe(
      map((res: Response) => {
        this.user = res.json();
        console.log("Automatically logged in");
        return this.user;
      })
    )
  };

  signup(newUser: User): Observable<User>{
    return this.http.post(`${BASEURL}/api/signup`, newUser, this.options).pipe(
      map( (res: Response) => {
        this.user = res.json();
        console.log(res.json());
        return res.json();
      }),
      catchError (e => of(this.errorHandler(e)))
    )
  };

  login(knownUser): Observable<User>{
    return this.http.post(`${BASEURL}/api/login`, knownUser, this.options).pipe(
      map((res:Response) => {
        this.user = res.json();
        console.log(res.json());
        return res.json();
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  };

  logout(){
    return this.http.post(`${BASEURL}/api/logout`, this.options).pipe(
      map((res: Response) => {
        this.user = null;
      }),
      catchError(e => of(this.errorHandler(e)))
    )
  };


  errorHandler(e){
    console.log("SessionServiceError ");
    console.log(e.getMessage);
    console.log(e);
  };


}
