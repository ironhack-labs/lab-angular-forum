import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsServices } from '../services/threads.service';
import { ListThreadComponent } from './list-thread/list-thread.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ListThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ThreadsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
