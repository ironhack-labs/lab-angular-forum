import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Router } from "@angular/router";
import {AuthService} from './auth.service';


const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private authService:AuthService,
              private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Checking can activate");
    if(this.authService.getUser()){
      return true;
    }else {
      this.router.navigate(['home',{error : "Unauthorized permisson"}]);
      //alert("You are not logged");
      return false;
    }
    //return this.authService.getUser() ? true : false;

  }
}
