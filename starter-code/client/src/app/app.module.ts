import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThreadsService } from '../service/getThreats.service';
import { HttpModule } from '@angular/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../service/session.service';
import { NewComponent } from './new/new.component';
import { NewThreadComponentComponent } from './new-thread-component/new-thread-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthenticationComponent,
    NewComponent,
    NewThreadComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
