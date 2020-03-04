import { Component, OnInit } from "@angular/core";
import { Mcq } from "../MCQ/mcq";
import { MCQService } from "../MCQ/mcq.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  mcqList: Mcq[];
  getMcqService(): void {
    this.mcqService.getMCQs().subscribe(mcqlist => (this.mcqList = mcqlist));
  }
  constructor(private mcqService: MCQService) {}

  ngOnInit() {
    this.getMcqService();
  }
}
