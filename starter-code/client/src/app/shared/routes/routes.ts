import { Routes } from '@angular/router';

import { ThreadsComponent } from './../../components/threads/threads.component';
import { NewThreadComponent } from './../../components/new-thread/new-thread.component';
import { LoginComponent } from './../../components/login/login.component';
import { SignupComponent } from './../../components/signup/signup.component';

export const router: Routes = [
  { path: '', component: ThreadsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'threads/new', component: NewThreadComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
