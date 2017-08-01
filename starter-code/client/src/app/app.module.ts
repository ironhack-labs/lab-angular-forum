import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SessionService } from '../services/Session.service';
import { ThreadsService } from '../services/Threads.service';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [ThreadsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
