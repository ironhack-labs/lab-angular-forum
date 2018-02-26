import { Routes } from '@angular/router';
import { ListThreatComponent } from './list-threat/list-threat.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';

export const routes: Routes = [
    { path: '', component: ListThreatComponent},
    { path: 'login', component: AuthLoginComponent},
    { path: '**', redirectTo: ""}
];