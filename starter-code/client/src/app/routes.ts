import { Routes } from '@angular/router';

import { ThreadsListComponent } from './threads-list/threads-list.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ThreadsService } from '../services/threads.service';

export const routes: Routes = [
    { path: '', component: ThreadsListComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: '**', redirectTo: '' }
];
