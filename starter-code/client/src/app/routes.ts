import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ThreadsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
];