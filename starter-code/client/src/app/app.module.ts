import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ThreadsListComponent } from './ThreadsList/ThreadsList.component';
import {ThreadsService } from './services/Threads.service';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';



@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
