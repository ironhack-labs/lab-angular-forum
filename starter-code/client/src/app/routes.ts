import { Routes } from "@angular/router";
import { ListThreadsComponent } from "./componentes/list-threads/list-threads.component";
import { AuthSignupComponent } from "./componentes/auth-signup/auth-signup.component";
import { AuthLoginComponent } from "./componentes/auth-login/auth-login.component";

export const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'signup', component: AuthSignupComponent},
  { path: 'login', component: AuthLoginComponent},
  { path: 'home', component: ListThreadsComponent}
]