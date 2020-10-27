import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Quiz } from "../quiz.model";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  public quiz: Quiz[];

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.questionsService.getQuizzes().subscribe(quiz => {
      this.quiz = quiz;
    });
  }
}
