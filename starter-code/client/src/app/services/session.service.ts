import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from '../../environments/environment';
import {map, catchError} from 'rxjs/operators';
import { of, Observable } from 'rxjs';


const { baseurl } = environment;

export interface User{
  username: string,
  email: string,
  password: string
}

@Injectable()
export class SessionService {

  user: User;
  options: object = { withCredentials:true };

  constructor(private http:Http) {
    this.isLogged().subscribe();
  }

  isLogged(){
    return this.http.get(`${baseurl}/api/loggedin`, this.options).pipe(
      map( (res:Response) => {
        this.user = res.json();
        console.log(`Automatically login ${this.user.username}`);
        return this.user;
      }),
      catchError(e => {console.log("You have to login first!"); return of(e)})
    );
  }

  signup(username:string, email:string, password:string): Observable<object>{
    return this.http.post(`${baseurl}/api/signup`,{username,email,password},this.options)
      .pipe(map( (res:Response) => {
        let user = res.json();
        this.user = user;
        return this.user;
      }),
      catchError( e => of(this.errorHandler(e)))
    )
  }

  login(username:string, password:string): Observable<object>{
    return this.http.post(`${baseurl}/api/login`,{username,password},this.options)
      .pipe(map( (res:Response) => {
        let user = res.json();
        this.user = user;
        return this.user;
      }),
      catchError( e => of(this.errorHandler(e)))
    )
  }

  logout(): Observable<void>{
    return this.http.get(`${baseurl}/api/logout`,this.options).pipe(
      map( (res:Response) => {
        this.user = null;
        return;
      }),
      catchError( e => of(this.errorHandler(e)))
    )
  }

  errorHandler(e){
    console.log('SessionServiceError')
    console.log(e.message);
    console.log(e);
    return e;
  }
}