import { Routes } from '@angular/router';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';
// import {  } from './single-dish/single-dish.component';

export const routes: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full' },
  { path: 'threads', component: MyThreadsComponent },
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: SingleThreadComponent}
];
