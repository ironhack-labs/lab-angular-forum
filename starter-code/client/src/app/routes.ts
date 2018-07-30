import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListthreadsComponent } from './listthreads/listthreads.component';
import { NewthreadComponent } from './newthread/newthread.component';


export const routes: Routes = [
  { path:'', component: ListthreadsComponent},
  { path:'signup', component: SignupComponent},
  { path:'login', component: LoginComponent},
  { path:'threads/new', component:NewthreadComponent}
];