import { Routes } from '@angular/router';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    { path: '', component: ThreadListComponent },
    { path: 'login', component: LoginformComponent },
    { path: '**', redirectTo: '' },
];
