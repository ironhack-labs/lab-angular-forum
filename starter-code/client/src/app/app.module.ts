import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsServices } from '../services/threads.service';
import { ListThreadComponent } from './list-thread/list-thread.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import {AuthService} from '../services/auth.service';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ListThreadComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ThreadsServices, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
