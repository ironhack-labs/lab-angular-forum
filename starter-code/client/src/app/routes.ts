import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ThreadComponent } from "./thread/thread.component";
import { ThreadDetailComponent } from "./thread-detail/thread-detail.component";



export const routes : Routes =[
{path : "", component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'threads/new', component: ThreadComponent},
{path:'thread/:id', component: ThreadDetailComponent}
]