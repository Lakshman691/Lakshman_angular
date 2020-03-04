import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MCQComponent } from "./MCQ/mcq.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MCQDetailsComponent } from "./mcq-details/mcq-details.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "question/:id", component: MCQDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
