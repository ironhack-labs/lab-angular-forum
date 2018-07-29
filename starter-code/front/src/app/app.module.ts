import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { SessionService } from '../services/session.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpModule } from '../../node_modules/@angular/http';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { routes } from '../routes';
import {FormsModule} from '@angular/forms'
import { ThreadsService } from '../services/threads.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadComponent } from './thread/thread.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    NewThreadComponent,
    ThreadComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SessionService,ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
