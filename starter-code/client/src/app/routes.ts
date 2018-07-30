import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ThreadsComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    {path: 'threads/new', component:NewThreadComponent},
    {path: 'threads/:id', component:SingleThreadComponent},
    {path: "threads/:id", component: SingleThreadComponent}
];