import { Component, OnInit } from "@angular/core";
import { Mcq } from "./mcq";
import { MCQService } from "./mcq.service";
@Component({
  selector: "app-mcq",
  templateUrl: "./mcq.component.html",
  styleUrls: ["./mcq.component.css"]
})
export class MCQComponent implements OnInit {
  mcqlist: Mcq[];
  onSelect(mcq: Mcq, ans1: String): void {
    if (ans1 === mcq.ans) {
      mcq.title = "correct";
    } else mcq.title = " not correct";
  }
  getMcqService(): void {
    this.mcqService.getMCQs().subscribe(mcqlist => (this.mcqlist = mcqlist));
  }
  constructor(private mcqService: MCQService) {}

  ngOnInit() {
    this.getMcqService();
  }
}
