import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";

import { AppComponent } from "./app.component";
import { ThreadsListComponent } from "./threads-list/threads-list.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SessionService } from "../services/session.service";
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
