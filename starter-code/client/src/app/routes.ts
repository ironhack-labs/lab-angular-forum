import { Routes, RouterModule } from '@angular/router';
import { ListThreadsComponent} from './list-threads/list-threads.component'

export const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: ListThreadsComponent },

];