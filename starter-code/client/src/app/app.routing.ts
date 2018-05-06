import { Routes } from '@angular/router';
import { AllThreadsComponent } from './all-threads/all-threads.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: AllThreadsComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
];