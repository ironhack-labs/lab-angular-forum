import { Routes } from '@angular/router';

import { ThreadsComponent } from './../../components/threads/threads.component';

export const router: Routes = [
  { path: '', component: ThreadsComponent },
  { path: '**', redirectTo: '' }
];
