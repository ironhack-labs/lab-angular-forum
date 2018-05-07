
import { Routes, RouterModule } from '@angular/router';
import { AllThreadsComponent } from '../allThreads/allThreads.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';

export const routes: Routes = [
  { path: '', redirectTo:'index', pathMatch:'full'},
  { path: 'index', component: AllThreadsComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent}]
