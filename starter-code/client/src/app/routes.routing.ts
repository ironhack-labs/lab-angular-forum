import { Routes, RouterModule } from "@angular/router";
import { ThreadListComponent } from "./threadList/threadList.component";
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadListComponent },
  { path: "login", component: LoginComponent}

];

