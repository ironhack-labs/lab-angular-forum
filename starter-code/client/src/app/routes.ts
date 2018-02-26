import { Routes } from '@angular/router';
import { ThreadsListComponent } from './threads-list/threads-list.component';




export const routes: Routes = [
    { path: '', component: ThreadsListComponent},
    // { path: 'threads/new', component: },
    // { path: 'thread/:id', component: },
    { path: '**', redirectTo: '' }
];