import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '../../node_modules/@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component'

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
