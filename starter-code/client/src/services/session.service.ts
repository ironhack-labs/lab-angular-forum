import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Http, Response } from '@angular/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEURL = environment.BASEURL;



@Injectable()
export class SessionService {

  user: User;
  options: object = {withCredentials: true};

  constructor(private http: Http) { }

  signup(newUser: User): Observable<User>{
    return this.http.post(`${BASEURL}/api/signup`, newUser, this.options).pipe(
      map( (res: Response) => {
        this.user = res.json();
        console.log(res.json());
        return res.json();
      })
    )
  };

  login(knownUser): Observable<User>{
    return this.http.post(`${BASEURL}/api/login`, knownUser, this.options).pipe(
      map((res:Response) => {
        this.user = res.json();
        console.log(res.json());
        return res.json();
      })
    )
  };
  logout(){};
  isLogged(){};
  errorHandler(){};


}
