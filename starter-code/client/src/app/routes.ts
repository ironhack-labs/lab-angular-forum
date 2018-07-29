import { Routes } from "@angular/router";
import { ThreadsComponent } from './threads/threads.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { NewThreadComponent } from './new-thread/new-thread.component'
import { ThreadDetailComponent } from './thread-detail/thread-detail.component'

export const routes: Routes = [
  { path: '', component: ThreadsComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'threads/new', component: NewThreadComponent },
  { path: 'threads/:id', component: ThreadDetailComponent }
]






// export const routes: Routes = [
//   { path: '', redirectTo: 'threads', pathMatch: 'full' },
//   { path: 'login',  component: LoginComponent },
//   { path: 'signup',  component: SignupComponent },
//   { path: 'threads', component: ThreadsComponent,
//     children: [
//       { path: 'new', component: NewThreadComponent }
//     ]
//   }
// ]
