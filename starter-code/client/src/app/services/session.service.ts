import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
    BASEURL: string = "http://localhost:3000"
    options: object = { withCredentials: true };

    private user: any;

    constructor(private http: Http, private router:Router) {
        this.isLoggedIn().subscribe();
    }

    getUser() {
        return this.user;
    }

    private configureUser(set = false) {
        return (user) => {
            if (set) {
                this.user = user;
                console.log(`Setting user, welcome ${this.user.username}`)
            } else {
                console.log(`bye bye ${this.user.username}`)
                this.user = null;
            }
            return user;
        }
    }

    handleError(e) {
        console.log(e);
        return Observable.throw(e.json().message);
    }

    signup(username: string, email: string, password: string): Observable<any> {
        console.log(username, email, password)
        return this.http.post(`${this.BASEURL}/api/signup`, { username, email, password }, this.options)
            .map(res => res.json())
            .map(this.configureUser(true), this.router.navigate(['/home']))
            .catch(this.handleError);
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.BASEURL}/api/login`, { username, password }, this.options)
            .map(res => res.json())
            .map(this.configureUser(true), this.router.navigate(['/home']))
            .catch(this.handleError);
    }


    logout(): Observable<any> {
        return this.http.get(`${this.BASEURL}/api/logout`, this.options)
            .map(res => res.json())
            .map(this.configureUser(false))
            .catch(this.handleError);
    }

    isLoggedIn(): Observable<any> {
        return this.http.get(`${this.BASEURL}/api/loggedin`, this.options)
            .map(res => res.json())
            .map(this.configureUser(true))
            .catch(this.handleError);
    }


}