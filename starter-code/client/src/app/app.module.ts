import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { SessionService } from "./session.service";


import { AppComponent } from './app.component';
import { ListAllThreadsComponent } from './listAllThreads/listAllThreads.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { routes } from './routes';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';



@NgModule({
  declarations: [
    AppComponent,
    ListAllThreadsComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    NewThreadComponent,
    SingleThreadComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
