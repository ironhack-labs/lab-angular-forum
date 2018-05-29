import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes, RoutesRecognized } from '@angular/router'
import { routes } from './routes/routes.routing'

import { AppComponent } from './app.component';
import { AllThreadsComponent } from './allThreads/allThreads.component';
import { GetThreadsService } from './services/getThreads.service';
import { FormsModule } from '@angular/forms'
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { NewThreadComponent } from './newThread/newThread.component';
import { SingleThreadComponent } from './singleThread/singleThread.component';


@NgModule({
  declarations: [
    AppComponent,
    AllThreadsComponent,
    SignUpComponent,
    LogInComponent,
    NewThreadComponent,
    SingleThreadComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, GetThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
