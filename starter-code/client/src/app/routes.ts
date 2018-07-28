import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
// import { DishesComponent } from './dishes/dishes.component';
// import { SinglerecipeComponent } from './singlerecipe/singlerecipe.component';

export const routes: Routes = [
  { path: '', component: ThreadsComponent },
  // { path: 'singledish/:id', component: SinglerecipeComponent }
];
