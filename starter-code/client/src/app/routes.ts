import { Routes } from '@angular/router';

import { ThreadListComponent } from './thread-list/thread-list.component';

export const routes: Routes = [
    { path: '', component: ThreadListComponent },
    { path: '**', redirectTo: '' }
];
