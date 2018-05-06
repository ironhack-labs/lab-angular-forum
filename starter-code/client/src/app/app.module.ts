import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAllThreadsComponent } from './listAllThreads/listAllThreads.component';
import { routes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    ListAllThreadsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
