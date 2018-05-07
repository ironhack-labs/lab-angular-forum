import { Routes } from '@angular/router';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { MyThreadComponent } from './my-thread/my-thread.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MyThreadsComponent},
  { path: 'login',  component: AuthLoginComponent },
  { path: 'signup', component: AuthSignupComponent},
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: MyThreadComponent },
 
];