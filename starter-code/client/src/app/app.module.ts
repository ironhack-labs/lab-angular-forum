import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";

import { SessionService } from "./services/session.service";
import { ForumService } from "./services/forum.service";

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';

export const routes: Routes = [
  { path: '', component: ForumListComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'threads/new', component: NewThreadComponent },
  { path: 'threads/:id', component: ThreadDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    ForumListComponent,
    NewThreadComponent,
    ThreadDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
