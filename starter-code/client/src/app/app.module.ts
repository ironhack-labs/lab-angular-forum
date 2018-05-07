import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThreadListComponent } from '../app/threadList/threadList.component'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routes } from './routes.routing';
import { RouterModule } from '@angular/router';
import { RequestService  } from '../app/services/request.service';
import { AuthService } from './services/auth.service'
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RequestService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
