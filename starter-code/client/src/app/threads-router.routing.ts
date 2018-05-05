import { Routes, RouterModule } from '@angular/router';
import { AllThreadsComponent } from './all-threads/all-threads.component';

const routes: Routes = [
  { path:"", component: AllThreadsComponent },
];

export const ThreadsRouterRoutes = RouterModule.forRoot(routes);
