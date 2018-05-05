import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { ThreadsService } from './threads.service';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent, MyThreadsComponent],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
