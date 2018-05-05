import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './my-route.routing';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { ThreadsListComponent } from './threadsList/threadsList.component';
import { ThreadsService } from './services/threads.service';

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
