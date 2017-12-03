import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AuthService } from './../services/auth/auth.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  isAuth: Observable<boolean> | Promise<boolean> | boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.isAuth = this.authService.isAuthenticated();
    if (!this.isAuth) {
      this.router.navigate(['login']);
    }
    return this.isAuth;
  }
}
