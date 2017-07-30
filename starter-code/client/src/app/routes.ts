import { Routes } from '@angular/router';

import { ThreadsListComponent } from './threads-list/threads-list.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ThreadsService } from '../services/threads.service';

export const routes: Routes = [
    { path: '', component: ThreadsListComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'threads/new', component: NewThreadComponent},
    { path: 'threads/:id', component: ThreadDetailComponent},
    { path: '**', redirectTo: '' }
];
