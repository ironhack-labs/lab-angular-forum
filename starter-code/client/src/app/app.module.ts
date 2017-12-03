import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { ThreadService } from './shared/services/thread.service';
import { router } from './shared/routes/routes';

import './shared/operators/rxjs.operators';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    ThreadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
