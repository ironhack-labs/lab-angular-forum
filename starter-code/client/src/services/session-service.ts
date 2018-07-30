import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";
import "rxjs";
import { map, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { Observable } from "rxjs";

const {BASEURL} = environment;

@Injectable()
export class SessionService {
  user: any;
  options:object = {withCredentials:true};

  constructor(private http: Http) {
    this.isLogged().subscribe();
   }

  signup(username: string, email: string, password: string): Observable<object> {
    return this.http.post(`${BASEURL}/api/signup`, {username, email, password}, this.options).pipe(
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  login(username: string, password: string){
    return this.http.post(`${BASEURL}/api/login`, {username, password}, this.options).pipe(  
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  isLogged(){
    return this.http.post(`${BASEURL}/api/loggedin`, {}, this.options).pipe(  //por que es un post?
      map( (res:Response) => {
        this.user = res.json();
        return this.user;
      }),
      catchError( e => of(this.handleError(e)))
    );
  }

  logout(){
    return this.http.post(`${BASEURL}/api/logout`, {}, this.options).pipe( 
      map( (res:Response) => {
        this.user = null;
      }),
      catchError( e => of(this.handleError(e)))
    )

  }

  handleError(error){
    console.log('SessionServiceError')
    console.log(error.message);
    console.log(error);
    return error;
  }
}