import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './my-route.routing';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { ThreadsListComponent } from './threadsList/threadsList.component';
import { ThreadsService } from './services/threads.service';
import { LoginComponent } from './login/login.component';
import { SessionService } from "./services/session.service";
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './newThread/newThread.component';
import { ThreadDetailComponent } from './threadDetail/threadDetail.component';
import { RepliesService } from './services/replies.service';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    ThreadDetailComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService, SessionService, RepliesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
