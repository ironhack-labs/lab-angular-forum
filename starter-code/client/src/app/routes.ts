import {Routes} from '@angular/router';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: ThreadListComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
];