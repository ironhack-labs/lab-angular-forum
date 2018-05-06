import { Routes, RouterModule } from "@angular/router";
import { ThreadListComponent } from "./threadList/threadList.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ThreadListComponent }
];

