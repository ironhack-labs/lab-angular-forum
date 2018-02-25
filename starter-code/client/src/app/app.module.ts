import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ForumService } from "../services/forum.service";

import { AppComponent } from './app.component';
import { ListThreatComponent } from './list-threat/list-threat.component';
import { RouterModule } from '@angular/router';
import { routes } from "./routes";
import { AuthLoginComponent } from './auth-login/auth-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListThreatComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
