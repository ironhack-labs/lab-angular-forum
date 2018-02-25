import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { ForumService } from '../services/forum.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes }  from "./routes";


@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
