import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routes} from './routes';
import { AuthService } from './services/auth.service';
import { ThreadListService } from './services/thread-list.service';
import { LoginformComponent } from './loginform/loginform.component';
import { UserprofileComponent } from './userprofile/userprofile.component'
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ThreadListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
