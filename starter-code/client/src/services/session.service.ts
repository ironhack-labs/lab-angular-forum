import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './../environments/environment';
import "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const { BASEURL } = environment;

interface UserObject{
  username: string
}

@Injectable({
  providedIn: "root"
})
export class SessionService {

  user: UserObject;
  options:object={withCredentials:true}

  constructor(private http:Http) { }

  handleError(e){
    console.log(e);
    return e;
  }

  signup(username:string, password:string, email:string): Observable<object>{
console.log(username, password, email)
    return this.http.post(`${BASEURL}/api/signup`,{username, password, email}, this.options).pipe(map(
      (res:Response)=> {
        let data = res.json();
        console.log(data)
        this.user = data;
        return this.user;
      }),
      catchError( e => of (this.handleError(e)))
    )
  }

  login(username:string,password:string): Observable<object>{
    return this.http.post(`${BASEURL}/api/login`,{username, password}, this.options).pipe(map(
      (res:Response)=> {
        let user = res.json();
        this.user = user;
        return this.user;
      }),
      catchError( e => of (this.handleError(e)))
    )
  }

  logout(){
    return this.http.get(`${BASEURL}/api/login`, this.options).pipe(
      map((res:Response)=> {
        this.user = null;
      }),
      catchError( e => of (this.handleError(e)))
    )
  }
}
