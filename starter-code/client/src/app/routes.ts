import { Routes } from "@angular/router";
import { ListThreadsComponent } from "./componentes/list-threads/list-threads.component";
import { AuthSignupComponent } from "./componentes/auth-signup/auth-signup.component";
import { AuthLoginComponent } from "./componentes/auth-login/auth-login.component";
import { NewThreadComponent } from "./componentes/new-thread/new-thread.component";
import { ThreadComponent } from "./componentes/thread/thread.component";

export const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'signup', component: AuthSignupComponent},
  { path: 'login', component: AuthLoginComponent},
  { path: 'home', component: ListThreadsComponent},
  { path: 'threads/new', component: NewThreadComponent},
  { path: 'threads/:id', component: ThreadComponent }
  
]