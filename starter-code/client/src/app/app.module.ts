import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ThreadsService } from '../services/threads.service';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { AppComponent } from './app.component';
import { ThreadsListComponent } from './threads-list/threads-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
