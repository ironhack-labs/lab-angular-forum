import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { ThreadsService } from './threads.service';
import { ListThreadsComponent } from './list-threads/list-threads.component';
import { SessionService } from './session.service'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { OneThreadComponent } from './one-thread/one-thread.component';



@NgModule({
  declarations: [
    AppComponent,
    ListThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    OneThreadComponent
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
