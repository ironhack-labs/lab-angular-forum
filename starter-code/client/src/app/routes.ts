import { Routes } from "@angular/router";
import { ThreadsComponent } from "../app/threads/threads.component";
import { LoginComponent } from "../app/login/login.component";
import { SignupComponent } from "../app/signup/signup.component";
import { NewThreadComponent } from "../app/new-thread/new-thread.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadsComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "threads/new", component: NewThreadComponent },
];
