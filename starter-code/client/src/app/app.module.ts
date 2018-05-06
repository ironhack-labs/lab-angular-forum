import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "../routes.routing";

import { ThreadListComponent } from "./ThreadList/ThreadList.component";

import { ThreadService } from "./services/thread.service";
import { SessionService } from "./services/session.service";

@NgModule({
  declarations: [AppComponent, ThreadListComponent],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ThreadService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
