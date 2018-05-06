import { Routes, RouterModule } from '@angular/router';
import { NewThreadComponent } from './app/new-thread/new-thread.component';
import { ThreadListComponent } from './app/ThreadList/ThreadList.component';

export const routes: Routes = [
  { path: '', component: ThreadListComponent },
  { path: 'thread/new', component: NewThreadComponent },
  { path: '**', redirectTo: '' }
];
