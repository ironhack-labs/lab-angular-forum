import { Routes } from "@angular/router";
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';


const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ThreadListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'private/newThread', component: NewThreadComponent },
  { path: '**', redirectTo: 'home' }


  // { path: 'users/:id', component: UserComponent, canActivate: [IsAuthenticatedGuard],
  //   canDeactivate: [CanLeaveEditUserGuard], resolve: {
  //     user: UserResolverGuard
  //   } },
];

export { routes }
