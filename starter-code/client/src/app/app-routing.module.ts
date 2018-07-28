import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLogged implements CanActivate {

  constructor(public authService: AuthService) { }

  canActivate(): boolean {
    return this.authService.user !==  undefined;
  }
}

const routes: Routes = [
  {path: '', component: ThreadsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'threads/new', component: NewThreadComponent, canActivate: [UserLogged]},
  {path: 'threads/:id', component: SingleThreadComponent, canActivate: [UserLogged]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
