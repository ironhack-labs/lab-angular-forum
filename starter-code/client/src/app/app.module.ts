import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { ThreadsService } from './threads.service';
import { ListThreadsComponent } from './list-threads/list-threads.component';



@NgModule({
  declarations: [
    AppComponent,
    ListThreadsComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
