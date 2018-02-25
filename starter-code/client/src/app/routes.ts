import { Routes } from "@angular/router"
import { ThreadsComponent } from "./threads/threads.component";

export const routes: Routes = [
  {path: "" , component: ThreadsComponent },
  { path: "**", redirectTo: ""}
]