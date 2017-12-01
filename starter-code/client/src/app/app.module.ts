import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import {ThreadsService} from './services/threads.service'
import { AuthService } from './services/auth.service'
import { RouterModule } from '@angular/router';
import { routes } from './routes'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
