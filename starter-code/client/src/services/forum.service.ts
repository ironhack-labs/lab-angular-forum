import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
    username: string,
    password: string
}

@Injectable()
export class ForumService {
    BASE_URL: string = 'http://localhost:3000';
    options: object = { withCredentials: true };
    constructor(private http: Http) {
        this.isLoggedIn().subscribe();
    }

    getThreads() {
        return this.http.get(`${this.BASE_URL}/api/threads`)
            .map((res) => res.json());
    }

    private user:User;

    getUser(){
      return this.user;
    }
  
    private configureUser(set=false){
      return (user) => {
        if(set){
          this.user = user;
          console.log(`Setting user, welcome ${this.user.username}`)
        }else{
          console.log(`bye bye ${this.user.username}`)
          this.user = null
        }
        return this.user;
      }
    }
  
    handleError(e) {
      console.log(e);
      return Observable.throw(e.json().message);
    }
  

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.BASE_URL}/api/login`, { username, password }, this.options)
            .map(res => res.json())
            .map(this.configureUser(true))
            .catch(this.handleError);
    }

    logout(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/api/logout`, this.options)
            .map(res => res.json())
            .map(this.configureUser(false))
            .catch(this.handleError);
    }

    isLoggedIn(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/api/loggedin`, this.options)
            .map(res => res.json())
            .map(this.configureUser(true))
            .catch(this.handleError);
    }

    //   get(id) {
    //     return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
    //       .map((res) => res.json());
    //   }

}