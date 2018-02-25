import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { ForumService } from '../services/forum.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes }  from "./routes";
import { SessionService } from '../services/session.service';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    TopbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ForumService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
