import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThreadsService } from './services/threads.service';
import { SessionService } from "./services/session.service";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { DetailThreadComponent } from './detail-thread/detail-thread.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent,
    DetailThreadComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
  ],
  providers: [ThreadsService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
