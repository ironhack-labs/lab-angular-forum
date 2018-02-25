import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';


export const routes: Routes = [
  { path: '', component: ThreadsComponent},
  // { path: ":id", component: SingleEntryComponent},
  { path: '**', redirectTo: ''},
];
