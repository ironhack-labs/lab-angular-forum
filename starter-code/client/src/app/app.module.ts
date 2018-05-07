import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsListComponent } from './ThreadsList/ThreadsList.component';
import {ThreadsService } from './services/Threads.service';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { AuthLoginComponent } from './AuthLogin/AuthLogin.component';
import { AuthSignupComponent } from './AuthSignup/AuthSignup.component';
import { SessionService } from './services/Session.service';
import { NewThreadComponent } from './NewThread/NewThread.component';
import { SingleThreadComponent } from './SingleThread/SingleThread.component';



@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent,
    SingleThreadComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ThreadsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
