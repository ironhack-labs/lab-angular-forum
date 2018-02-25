import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { NewThreadComponentComponent } from './new-thread-component/new-thread-component.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'threads/new', component: NewThreadComponentComponent },
    { path: 'thread/:id', component: SingleThreadComponent},
    { path: '**', redirectTo: '' }
];