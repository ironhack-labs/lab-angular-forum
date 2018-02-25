import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThreadsService } from '../service/getThreats.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
