import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProviderService } from './services/provider.service'
import { AuthService } from './services/auth.service'
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';

import { AppComponent } from './app.component';
import { ThreadComponent } from './thread/thread.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NewThreadComponent } from './new-thread/new-thread.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    LoginformComponent,
    UserprofileComponent,
    NewThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProviderService,AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
