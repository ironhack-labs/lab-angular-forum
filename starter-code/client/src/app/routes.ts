import { Routes, RouterModule } from '@angular/router';
import { ListAllThreadsComponent } from './listAllThreads/listAllThreads.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListAllThreadsComponent },
];

