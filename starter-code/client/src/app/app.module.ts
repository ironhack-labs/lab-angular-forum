import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'
import { AppComponent } from './app.component';
import { ThreadsService } from './servicios/threads.service';
import { ListThreadsComponent } from './componentes/list-threads/list-threads.component';
import { AuthLoginComponent } from './componentes/auth-login/auth-login.component';
import { AuthSignupComponent } from './componentes/auth-signup/auth-signup.component';
import { NewThreadComponent } from './componentes/new-thread/new-thread.component';
import { ThreadComponent } from './componentes/thread/thread.component';


@NgModule({
  declarations: [
    AppComponent,
    ListThreadsComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    NewThreadComponent,
    ThreadComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
