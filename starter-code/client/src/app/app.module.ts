import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AllComponentComponent } from './all-component/all-component.component';
import { ForumService } from './services/service';

import { RouterModule } from '@angular/router';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    AllComponentComponent
  ],
  imports: [
    BrowserModule,
        HttpModule,
    RouterModule.forRoot (routes)
  ],

  providers: [ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
