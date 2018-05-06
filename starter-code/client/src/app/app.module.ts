import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThreadListComponent } from '../app/threadList/threadList.component'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routes } from './routes.routing';
import { RouterModule } from '@angular/router';
import { RequestService  } from '../app/services/request.service'

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RequestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
