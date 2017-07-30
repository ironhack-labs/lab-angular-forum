import { Routes } from '@angular/router';

import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsService } from '../services/threads.service';

export const routes: Routes = [
    { path: '', component: ThreadsListComponent },
    { path: '**', redirectTo: '' }
];
