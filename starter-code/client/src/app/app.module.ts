import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './app.routing';
import { HttpModule } from '../../node_modules/@angular/http';
import { ThreadsService } from './services/threads.service';
import { NewThreadComponent } from './components/newThread/newThread.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    SignUpComponent,
    LoginComponent,
    NewThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SessionService,
    ThreadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
