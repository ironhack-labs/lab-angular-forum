import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';

// import { DishesComponent } from './dishes/dishes.component';
// import { SinglerecipeComponent } from './singlerecipe/singlerecipe.component';

export const routes: Routes = [
  { path: '', component: ThreadsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'threads/new', component: NewThreadComponent}
];
