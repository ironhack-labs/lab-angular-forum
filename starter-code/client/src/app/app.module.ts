import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "../routes.routing";
import { FormsModule } from '@angular/forms';

import { ThreadListComponent } from "./ThreadList/ThreadList.component";

import { ThreadService } from "./services/thread.service";
import { SessionService } from "./services/session.service";
import { LoginFormComponent } from './login-form/login-form.component';
import { NewThreadComponent } from './new-thread/new-thread.component';

@NgModule({
  declarations: [AppComponent, ThreadListComponent,
    LoginFormComponent,
    NewThreadComponent
],
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [ThreadService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
