import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NewThreadComponent } from "./new-thread/new-thread.component";
import { SingleThreadComponent } from "./single-thread/single-thread.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'threads/new', component: NewThreadComponent },
  { path: 'singlethread/:id', component: SingleThreadComponent }
];