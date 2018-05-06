import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AllThreadsComponent } from "./all-threads/all-threads.component";
import { ThreadsRouterRoutes } from "./threads-router.routing";
import { ThreadsServiceService } from "./threads-service.service";
import { HttpModule } from "@angular/http";
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { FormsModule } from "@angular/forms";
import { SessionService } from "./session-service.service";
import { NewThreadComponent } from './new-thread/new-thread.component';

@NgModule({
  declarations: [AppComponent, AllThreadsComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent
],
  imports: [BrowserModule, ThreadsRouterRoutes, HttpModule, FormsModule],
  providers: [ThreadsServiceService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
