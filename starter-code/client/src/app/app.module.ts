import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { routes } from './routes'
import { ThreadService } from './services/thread.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { IsLoggedInService } from './services/isLoggedIn.canActivate.service';
import { ThreadComponent } from './components/thread/thread.component';
import { ReplyComponent } from './components/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    LoginComponent,
    RegisterComponent,
    NewThreadComponent,
    ThreadComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadService, AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
