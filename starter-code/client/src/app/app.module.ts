import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
