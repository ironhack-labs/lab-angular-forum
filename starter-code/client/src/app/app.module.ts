import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { threadService } from '../services/threads.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authService } from '../services/auth.service';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [threadService, authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
