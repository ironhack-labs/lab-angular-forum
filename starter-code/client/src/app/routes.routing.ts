import { Routes, RouterModule } from "@angular/router";
import { ThreadListComponent } from "./threadList/threadList.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ThreadsNewComponent } from './threadsNew/threadsNew.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadListComponent },
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent },
  {path: "threads/new", component: ThreadsNewComponent }

];

