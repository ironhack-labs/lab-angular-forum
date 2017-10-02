import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './routes';
import {ThreadsService} from './services/threads.service';


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
