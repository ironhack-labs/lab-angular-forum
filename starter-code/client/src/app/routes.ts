import { Routes } from '@angular/router';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { ListthreadsComponent } from './listthreads/listthreads.component';
import { NewthreadComponent } from './newthread/newthread.component';


export const routes: Routes = [
  { path:'', component: ListthreadsComponent},
  { path:'signup', component: AuthSignupComponent},
  { path:'login', component: AuthLoginComponent},
  { path:'threads/new', component: NewthreadComponent},
];