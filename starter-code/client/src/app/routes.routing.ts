import { Routes, RouterModule } from "@angular/router";
import { ThreadListComponent } from "./threadList/threadList.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadListComponent },
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent }

];

