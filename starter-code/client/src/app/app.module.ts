import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AllThreadsComponent } from "./all-threads/all-threads.component";
import { ThreadsRouterRoutes } from "./threads-router.routing";
import { ThreadsServiceService } from "./threads-service.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, AllThreadsComponent],
  imports: [BrowserModule, ThreadsRouterRoutes, HttpModule],
  providers: [ThreadsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
