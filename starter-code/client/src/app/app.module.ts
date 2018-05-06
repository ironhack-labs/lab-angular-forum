import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthLoginComponent } from './AuthLogin/AuthLogin.component';
import { AuthSignupComponent } from './AuthSignup/AuthSignup.component';
import { NewThreadComponent } from './NewThread/NewThread.component';
import { SingleThreadComponent } from './SingleThread/SingleThread.component';
import { ThreadsListComponent } from './ThreadsList/ThreadsList.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent,
    SingleThreadComponent,
    ThreadsListComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
