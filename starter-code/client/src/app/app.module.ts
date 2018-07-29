import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ThreadsComponent } from "./threads/threads.component";
import { RouterModule } from "../../node_modules/@angular/router";
import { routes } from "./routes";
import { HttpModule } from "../../node_modules/@angular/http";
import { SessionService } from "../services/session-service";
import { ThreadsService } from "../services/threads-service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
