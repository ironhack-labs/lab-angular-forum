import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AllThreadsComponent } from './all-threads/all-threads.component';
import { ThreadsService } from './services/threads.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserSessionService } from './services/user-session.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AllThreadsComponent,
    SignUpComponent,
    LogInComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService, UserSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
