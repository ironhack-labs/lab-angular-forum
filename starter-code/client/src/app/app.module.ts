import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { ThreadsComponent } from './threads/threads.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component';
@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    SignupFormComponent,
    LoginFormComponent,
    NewThreadComponent,
    SingleThreadComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
