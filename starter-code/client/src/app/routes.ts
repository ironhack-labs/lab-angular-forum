import { Routes, RouterModule } from '@angular/router';
import { ListAllThreadsComponent } from './listAllThreads/listAllThreads.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';


export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListAllThreadsComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'login', component: AuthLoginComponent },


];

