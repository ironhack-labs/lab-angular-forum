import { Routes, RouterModule } from '@angular/router';
import { ThreadListComponent } from './app/ThreadList/ThreadList.component';


export const routes: Routes = [
  { path: '', component: ThreadListComponent },
  { path: '**', redirectTo: '' }
];
