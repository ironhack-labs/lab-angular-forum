
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./services/session.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { ListthreadsComponent } from './listthreads/listthreads.component';
import { ThreadService } from './services/threads.service';
import { NewthreadComponent } from './newthread/newthread.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      SignupComponent,
      ListthreadsComponent,
      NewthreadComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)

  ],
  providers: [SessionService, ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }