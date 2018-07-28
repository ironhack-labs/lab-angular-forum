import { Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { ThreadsComponent } from './main-components/threads/threads.component';
import { NewThreadComponent } from './main-components/newThread/newThread.component';


export const routes: Routes = [
  {path: '', component: ThreadsComponent,
  children: [
    {path: '', component: NewThreadComponent}
  ]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
]