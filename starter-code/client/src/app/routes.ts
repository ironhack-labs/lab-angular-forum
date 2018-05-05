import { Routes } from "@angular/router";
import { ThreadsListComponent } from "./ThreadsList/ThreadsList.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: ThreadsListComponent},
  { path: 'signup', component: AuthSignupComponent},
  { path: 'login', component: AuthLoginComponent},
]