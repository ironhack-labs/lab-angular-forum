import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ThreadService } from '../services/Threads.services';
import { AuthenticationService } from '../services/Authentication.services';
import { NewThreadComponentComponent } from './new-thread-component/new-thread-component.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    NewThreadComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
