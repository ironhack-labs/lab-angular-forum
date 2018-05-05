import { Routes, RouterModule } from '@angular/router';
import { ThreadsListComponent } from './threadsList/threadsList.component';

export const routes: Routes = [
  { path: '', component: ThreadsListComponent },
  { path: '**', redirectTo: '' }
];

export const MyRouteRoutes = RouterModule.forChild(routes);
