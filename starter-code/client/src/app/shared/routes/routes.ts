import { Routes } from '@angular/router';

import { ThreadsComponent } from './../../components/threads/threads.component';
import { LoginComponent } from './../../components/login/login.component';
import { SignupComponent } from './../../components/signup/signup.component';

export const router: Routes = [
  { path: '', component: ThreadsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
