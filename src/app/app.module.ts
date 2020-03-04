import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MCQComponent } from "./MCQ/mcq.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.modules";
import { MCQDetailsComponent } from "./mcq-details/mcq-details.component";
@NgModule({
  declarations: [
    AppComponent,
    MCQComponent,
    DashboardComponent,
    MCQDetailsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
