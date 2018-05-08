import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { ThreadsService } from './threads.service';
import { routes } from './routes';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { SessionService } from './session.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
  declarations: [AppComponent, MyThreadsComponent, AuthLoginComponent, AuthSignupComponent, NewThreadComponent, SingleThreadComponent],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule],
  providers: [ThreadsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
