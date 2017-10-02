import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';

import {AuthService} from './auth.service';


const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Checking can activate");

    //return timeout(5).then(() => true);
    //return this.auth.isLoggedIn().map(user => true)
    return this.auth.getUser() ? true : false
    //return false;
  }
}
