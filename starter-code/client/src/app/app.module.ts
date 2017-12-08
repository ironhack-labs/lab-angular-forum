import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { ThreadService } from './shared/services/thread/thread.service';
import { AuthService } from './shared/services/auth/auth.service';
import { router } from './shared/routes/routes';

import './shared/operators/rxjs.operators';
import { SingleThreadComponent } from './components/single-thread/single-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ThreadsComponent,
    SingleThreadComponent,
    NewThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    AuthService,
    ThreadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
