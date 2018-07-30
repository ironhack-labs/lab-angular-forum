import { Routes } from "@angular/router";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { ThreadListComponent } from "./components/thread-list/thread-list.component";

export const routes : Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent},
    { path: 'threads', component: ThreadListComponent}
]