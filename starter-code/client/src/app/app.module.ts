import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response, Http } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './routes'

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { ThreadsComponent } from './threads/threads.component';
import { SessionService } from './services/session.service';
import { ThreadService } from './services/thread.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadComponent } from './thread/thread.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    ThreadsComponent,
    NewThreadComponent,
    ThreadComponent,
    ReplyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
