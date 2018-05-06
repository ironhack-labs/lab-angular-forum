import { Routes } from '@angular/router';
import { ThreadsListComponent } from './ThreadsList/ThreadsList.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: ThreadsListComponent}




];
