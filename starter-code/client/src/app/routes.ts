import { Routes } from '@angular/router';
import { ThreadsListComponent } from './ThreadsList/ThreadsList.component';
import { AuthSignupComponent } from './AuthSignup/AuthSignup.component';
import { AuthLoginComponent } from './AuthLogin/AuthLogin.component';
import { NewThreadComponent } from './NewThread/NewThread.component';
import { SingleThreadComponent } from './SingleThread/SingleThread.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ThreadsListComponent},
  { path: 'signup', component: AuthSignupComponent},
  { path: 'login', component: AuthLoginComponent},
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: SingleThreadComponent}
];
