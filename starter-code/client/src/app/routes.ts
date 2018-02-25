import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { NewThreadComponentComponent } from './new-thread-component/new-thread-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'threads/new', component: NewThreadComponentComponent },
    { path: '**', redirectTo: '' }
];