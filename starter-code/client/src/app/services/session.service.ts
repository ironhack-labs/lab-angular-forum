import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { environment } from "../../environments/environment";

const { BASEURL } = environment;

interface UserObject {
  user: string;
}

@Injectable()
export class SessionService {
  user: UserObject;

  options: object = { withCredentials: true };

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  isLoggedIn(): Observable<UserObject> {
    return this.http.get(`${BASEURL}/api/loggedin`, this.options).pipe(
      map((res: Response) => {
        this.user = res.json();
        console.log("Automatically logged in");
        return this.user;
      })
    );
  }

  errorHandler(e) {
    console.log("SessionServiceError");
    console.log(e.message);
    console.log(e);
    return e;
  }

  signup(
    username: string,
    email: string,
    password: string
  ): Observable<object> {
    return this.http
      .post(
        `${BASEURL}/api/signup`,
        { username, email, password },
        this.options
      )
      .pipe(
        map((res: Response) => {
          let data = res.json();
          this.user = data.user;
          return this.user;
        }),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  login(username: string, password: string): Observable<object> {
    return this.http
      .post(`${BASEURL}/api/login`, { username, password }, this.options)
      .pipe(
        map((res: Response) => {
          let user = res.json();
          this.user = user;
          return this.user;
        }),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  logout() {
    return this.http.post(`${BASEURL}/api/logout`, this.options).pipe(
      map((res: Response) => {
        this.user = null;
      }),
      catchError(e => of(this.errorHandler(e)))
    );
  }
}