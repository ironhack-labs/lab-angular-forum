import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {routes} from './routes';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { ThreadService } from './thread.service';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { SessionService } from './session.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { MyThreadComponent } from './my-thread/my-thread.component';


@NgModule({
  declarations: [
    AppComponent,
    MyThreadsComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent,
    MyThreadComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  providers: [ThreadService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
