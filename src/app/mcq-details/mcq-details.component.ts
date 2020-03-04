import { Component, OnInit } from "@angular/core";
import { Mcq } from "../MCQ/mcq";
import { MCQService } from "../MCQ/mcq.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-mcq",
  templateUrl: "./mcq-details.component.html",
  styleUrls: ["./mcq-details.component.css"]
})
export class MCQDetailsComponent implements OnInit {
  mcq: Mcq;
  option: String;
  onSelect(selectedMcq: Mcq, ans1: String): void {
    if (ans1 === selectedMcq.ans) {
      selectedMcq.title = "Correct";
      this.option = "correct";
    } else {
      selectedMcq.title = " Wrong";
      this.option = "wrong";
    }
  }
  getMcqService(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.mcqService.getMCQ(id).subscribe(mcq => (this.mcq = mcq));
  }
  constructor(private mcqService: MCQService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMcqService();
  }
}
