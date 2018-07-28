
import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';



export const routes: Routes = [
  { path:'signup', component:SignupFormComponent},
  { path:'login', component:LoginFormComponent}
];