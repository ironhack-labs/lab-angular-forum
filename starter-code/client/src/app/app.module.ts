import { SessionService } from '../services/session.service';
import { routes } from './routes';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { ThreadsService } from '../services/threads.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { HomeComponent } from './main-components/home/home.component';
import { ThreadsComponent } from './main-components/threads/threads.component';
import { NewThreadComponent } from './main-components/newThread/newThread.component';
import { SingleThreadComponent } from './main-components/singleThread/singleThread.component';
import { NewReplyComponent } from './main-components/newReply/newReply.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ThreadsComponent,
    NewThreadComponent,
    SingleThreadComponent,
    NewReplyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [SessionService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
