import { Routes, RouterModule } from '@angular/router';
import { ListThreadsComponent} from './list-threads/list-threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListThreadsComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }

];
