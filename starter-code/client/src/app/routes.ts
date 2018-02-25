import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NewThreadComponentComponent } from './new-thread-component/new-thread-component.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: '**', redirectTo: '' },
    { path: 'new', component: NewThreadComponentComponent }
];