import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { ThreadsComponent } from './threads/threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadComponent } from './thread/thread.component';


export const routes: Routes = [
    { path: '', component: ThreadsComponent },
    { path: 'thread/new', component: NewThreadComponent },
    { path: 'thread/:id', component: ThreadComponent },
    { path: 'signup', component: AuthSignupComponent },
    { path: 'login', component: AuthLoginComponent },
    { path: '**', redirectTo: '' }
];