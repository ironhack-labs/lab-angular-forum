import { ThreadListComponent } from "./app/thread-list/thread-list.component";
import {  Routes } from "../node_modules/@angular/router";
import { AuthSignupComponent } from "./app/auth-signup/auth-signup.component";
import { AuthLoginComponent } from "./app/auth-login/auth-login.component";
import { NewThreadComponent } from "./app/new-thread/new-thread.component";
import { ThreadComponent } from "./app/thread/thread.component";


export const routes:Routes =[
    {path:"",component:ThreadListComponent},
    {path:"signup",component:AuthSignupComponent},
    {path:"login",component:AuthLoginComponent},
    {path:"threads/new",component:NewThreadComponent},
    {path:"threads/:id",component:ThreadComponent},

]