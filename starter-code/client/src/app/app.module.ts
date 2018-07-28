import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AllthreadsService } from '../services/allthreads.service';
import { routes } from './routes';
import { ThreadsComponent } from './threads/threads.component';



@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AllthreadsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
