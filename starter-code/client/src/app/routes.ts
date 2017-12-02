import { Routes } from "@angular/router";
import { ThreadListComponent } from './components/thread-list/thread-list.component';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ThreadListComponent }
  // { path: 'users', component: UserListComponent, canActivate: [IsAuthenticatedGuard] },
  // { path: 'users/:id', component: UserComponent, canActivate: [IsAuthenticatedGuard],
  //   canDeactivate: [CanLeaveEditUserGuard], resolve: {
  //     user: UserResolverGuard
  //   } },
];

export { routes }
