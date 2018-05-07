import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { ThreadsService } from './threads.service';


const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: ThreadsComponent},
  ]

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
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
