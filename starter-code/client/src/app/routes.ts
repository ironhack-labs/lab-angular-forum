import { Routes } from '@angular/router';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    { path: '', component: ThreadsListComponent },
    { path: 'login', component: LoginformComponent },
    { path: '**', redirectTo: '' }
];
