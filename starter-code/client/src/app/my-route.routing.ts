import { Routes, RouterModule } from "@angular/router";
import { ThreadsListComponent } from "./threadsList/threadsList.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NewThreadComponent } from "./newThread/newThread.component";

export const routes: Routes = [
  { path: "", component: ThreadsListComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "newThread", component: NewThreadComponent },
  { path: "**", redirectTo: "" }
];

export const MyRouteRoutes = RouterModule.forChild(routes);
