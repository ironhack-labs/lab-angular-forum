import { Routes } from '@angular/router';
import { MyThreadsComponent } from './my-threads/my-threads.component';
// import {  } from './single-dish/single-dish.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyThreadsComponent },
];
