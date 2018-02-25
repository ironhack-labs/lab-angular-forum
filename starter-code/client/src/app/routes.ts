import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';


export const routes: Routes = [
  { path: '', component: ThreadsComponent},
  { path: 'threads', component: NewThreadComponent},
  // { path: ":id", component: SingleEntryComponent},
  { path: '**', redirectTo: ''},
];
