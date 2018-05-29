import { Routes, RouterModule } from '@angular/router';
import { ListThreadsComponent} from './list-threads/list-threads.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { OneThreadComponent} from './one-thread/one-thread.component'



export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListThreadsComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "threads/new", component: NewThreadComponent },
  { path: "threads/:id", component: OneThreadComponent }
];