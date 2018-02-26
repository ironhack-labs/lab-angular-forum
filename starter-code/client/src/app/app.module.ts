import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NewThreadComponent } from './new-thread/new-thread.component';


import { ThreadService } from '../services/thread.service';
import { AuthService } from '../services/auth.service'

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    AuthenticationComponent,
    NewThreadComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
