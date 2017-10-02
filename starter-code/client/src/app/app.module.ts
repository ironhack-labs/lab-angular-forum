import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './routes';

import { ThreadListService } from './services/thread-list.service'

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
