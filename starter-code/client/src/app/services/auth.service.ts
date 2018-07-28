import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { tap } from 'rxjs/operators';

const BASEURL = environment.BASEURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: object;

  options: object = {withCredentials: true};

  constructor(public http: HttpClient) {
    this.isLogged().subscribe();
  }

  signup(user: object) {
    return this.http.post(`${BASEURL}/api/signup`, user, this.options).pipe(
      tap(data => this.user = data),
    );
  }

  login(user: object) {
    return this.http.post(`${BASEURL}/api/login`, user, this.options).pipe(
      tap(data => this.user = data),
    );
  }

  isLogged() {
    return this.http.post(`${BASEURL}/api/loggedin`, {}, this.options).pipe(
      tap(data => this.user = data),
    );
  }

  logout() {
    return this.http.post(`${BASEURL}/api/logout`, {}, this.options).pipe(
      tap(data => this.user = null)
    );
  }
}
