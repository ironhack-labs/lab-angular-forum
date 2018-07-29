import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';

import { RouterModule } from '@angular/router'
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { SessionService } from './services/session.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
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
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
