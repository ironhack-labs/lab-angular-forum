import { Routes } from "@angular/router";
import { ThreadsComponent } from "./threads/threads.component";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthSignupComponent } from "./auth-signup/auth-signup.component";
import { ThreadsService } from './services/threads.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { DetailThreadComponent } from "./detail-thread/detail-thread.component";

export const routes: Routes = [
  { path: '', component: ThreadsComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "threads/new", component: NewThreadComponent },
  { path: 'threads/:id', component: DetailThreadComponent },
  { path: '**', redirectTo: '' },
];