import { Injectable , EventEmitter} from '@angular/core';
import { Http, RequestOptions, Headers , Response} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable , Subject} from 'rxjs/Rx';
import 'rxjs';
import { User } from '../models/User.model'


@Injectable()
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api`;
  private options ={withCredentials: true };

  private user: User;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: Http) {
      this.isLoggedIn().subscribe();
  }

  public getLoginEventEmitter():EventEmitter<any>{
     return this.userLoginEvent;
   }

   public getUser(){ return this.user; }

   private emitUserLoginEvent(user){
     this.user = user;
     this.userLoginEvent.emit(user);
     return user;
   }

   login(user):Observable<User>  {
     return this.http.post(`${this.baseUrl}/login`, user,this.options)
       .map(res => res.json())
       .map(user => this.emitUserLoginEvent(user))
       .catch(this.handleError);
   }

   signup(user) {
    return this.http.post(`${this.baseUrl}/signup`, user, this.options)
      .map(res => res.json())
      .map( user =>this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }


  logout() {
    return this.http.get(`${this.baseUrl}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseUrl}/loggedin`,this.options)
    .map(res => res.json())
    .map(user => this.emitUserLoginEvent(user))
    .catch(this.handleError);
  }


  protected handleError (error :Response | any ): Observable<any> {
    console.log( error );
    return Observable.throw (error.json().message);
  }


}
