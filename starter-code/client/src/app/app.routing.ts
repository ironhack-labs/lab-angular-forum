import { Routes } from '@angular/router';
import { AllThreadsComponent } from './all-threads/all-threads.component';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: AllThreadsComponent},
];