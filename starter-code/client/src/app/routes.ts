
import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { AppComponent } from './app.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';
import { ThreadsComponent } from './threads/threads.component';



export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:ThreadsComponent},
  { path:'signup', component:SignupFormComponent},
  { path:'login', component:LoginFormComponent},
  {path: "threads/new", component: NewThreadComponent},
  {path: "threads/:id", component: SingleThreadComponent}
];