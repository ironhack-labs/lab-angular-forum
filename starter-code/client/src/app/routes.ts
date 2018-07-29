import { Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { ThreadsComponent } from './main-components/threads/threads.component';
import { NewThreadComponent } from './main-components/newThread/newThread.component';
import { SingleThreadComponent } from './main-components/singleThread/singleThread.component';
import { HomeComponent } from './main-components/home/home.component';
import { NewReplyComponent } from './main-components/newReply/newReply.component';


export const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: ThreadsComponent,
        children: [
          {path:'', component: NewThreadComponent}
        ]},
      {path: 'thread/:id', component: SingleThreadComponent,
        children: [
          {path: '', component: NewReplyComponent}
        ]}
    ]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
]