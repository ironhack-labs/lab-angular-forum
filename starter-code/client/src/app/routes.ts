import { Routes } from "@angular/router";
import { ThreadsListComponent } from "./threads-list/threads-list.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const routes: Routes = [
  { path: "", component: ThreadsListComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];
