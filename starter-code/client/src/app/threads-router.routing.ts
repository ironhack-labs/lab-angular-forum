import { Routes, RouterModule } from "@angular/router";
import { AllThreadsComponent } from "./all-threads/all-threads.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";

const routes: Routes = [
  { path: "", component: AllThreadsComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "signup", component: AuthSignupComponent }
];

export const ThreadsRouterRoutes = RouterModule.forRoot(routes);
