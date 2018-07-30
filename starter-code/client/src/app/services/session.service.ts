import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs";
import { of } from 'rxjs';

interface user {
    username: string
}

@Injectable()
export class SessionService {
    user: user;
    options: object = { withCredentials: true }
    constructor(private http: Http) {
        this.isLogged().subscribe();
    }

    signup(username: string, email: string, password: string): Observable<object> {
        return this.http.post(`http://localhost:3000/api/signup`, { username, email, password }, this.options).pipe(
            map((res: Response) => {
                let data = res.json();
                this.user = data.user;
                return this.user;
            }),
            catchError(e => of(this.errorHandler(e)))
        )
    }
    login(username: string, password: string): Observable<object> {
        return this.http.post(`http://localhost:3000/api/login`, { username, password }, this.options).pipe(
            map((res: Response) => {
                let user = res.json();
                this.user = user;
                return this.user;
            }),
            catchError(e => of(this.errorHandler(e)))
        )
    }
    isLogged() {
        return this.http.get(`http://localhost:3000/api/loggedin`, this.options).pipe(
            map((res: Response) => {
                this.user = res.json();
                console.log(`Automatically login ${this.user.username}`);
                return this.user;
            }),
            catchError(e => { console.log("You have to login first!"); return of(e) })
        );
    }
    logout() {
        return this.http.get(`http://localhost:3000/api/logout`, this.options).pipe(
            map((res: Response) => {
                this.user = null;
            }),
            catchError(e => of(this.errorHandler(e)))
        )
    }
    errorHandler(e) {
        console.log('SessionServiceError')
        console.log(e.message);
        console.log(e);
        return e;
    }
}