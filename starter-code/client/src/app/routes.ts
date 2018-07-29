import { Routes } from '@angular/router';
import { ThreadsComponent } from '../app/threads/threads.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component'

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:ThreadsComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent}
];