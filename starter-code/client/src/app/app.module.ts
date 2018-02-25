import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { SessionService } from '../services/session.service';
import { ThreadsService } from '../services/threads.service';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { routes } from './routes';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    LoginFormComponent,
    SignupFormComponent,
    NewThreadComponent,
    ThreadDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [
    SessionService,
    ThreadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
