import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { routes } from './routes'
import { ThreadService } from './services/thread.service';

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
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
