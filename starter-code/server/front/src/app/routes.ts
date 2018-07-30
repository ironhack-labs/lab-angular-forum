import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ThreadsComponent } from './threads/threads.component'
import { NewThreadComponent } from "./new-thread/new-thread.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadsComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "threads/new", component: NewThreadComponent },
];
