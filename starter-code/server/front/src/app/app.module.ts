import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { SessionService } from '../services/sessions';
import { ThreadsService } from '../services/threads';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { ThreadsComponent } from './threads/threads.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule

  ],
  providers: [SessionService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
