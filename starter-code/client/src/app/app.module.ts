import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { ThreadsService } from './services/threads.service'
import { ThreadsListComponent } from './threads-list/threads-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
