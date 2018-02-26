import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";


interface User {
  _id,
  username: string,
  email: string,
  password: string,
}


@Injectable()
export class SessionService {

  private user: User;

  baseURL: string = "http://localhost:3000";
  options: object = {withCredentials:true}

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

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
      return user;
    }
  }

  handleError(e) {
    console.log(e)
    return Observable.throw(e.json().message);
  }

  signup(username:string, email:string, password:string) {
    return this.http
      .post(`${this.baseURL}/api/signup`, {username,email,password}, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }

  login( username:string, password:string) {
    return this.http
      .post(`${this.baseURL}/api/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }

  logout() {
    console.log("logout")
    return this.http
      .get(`${this.baseURL}/api/logout`, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http
      .get(`${this.baseURL}/api/loggedin`, this.options)
      .map(res => res.json())
      .map(this.configureUser())
      .catch(this.handleError);
  }


}