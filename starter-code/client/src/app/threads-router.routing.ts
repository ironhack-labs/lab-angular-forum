import { Routes, RouterModule } from "@angular/router";
import { AllThreadsComponent } from "./all-threads/all-threads.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";
import { NewThreadComponent } from "./new-thread/new-thread.component";
import { SingleThreadComponent } from "./single-thread/single-thread.component";

const routes: Routes = [
  { path: "", component: AllThreadsComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "threads/new", component: NewThreadComponent },
  { path: "threads/:id", component: SingleThreadComponent }
];

export const ThreadsRouterRoutes = RouterModule.forRoot(routes);
