import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './routes';
import {ThreadsService} from './services/threads.service';
import {AuthService} from './services/auth.service';
import { LoginformComponent } from './loginform/loginform.component';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ThreadsService, AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
