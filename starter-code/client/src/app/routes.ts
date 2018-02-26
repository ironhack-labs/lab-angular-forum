
import { Routes } from '@angular/router';
// import { EntryRecipesComponent } from './entry-recipes/entry-recipes.component';
import {ListThreadsComponent} from './list-threads/list-threads.component';

export const routes: Routes = [
    { path: '', component: ListThreadsComponent},
    // { path: 'threads/:id', component: ListThreadsComponent},
    { path: '**', redirectTo: '' }
];