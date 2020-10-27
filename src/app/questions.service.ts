// observable una manera de acceder asyn data. - HttpClient returns an Observable (from the RxJS library you imported); for the purpose of this Exercise, you can consider it an enhanced promise, as they allow you to process events asynchronously.
// The use of the decorator this time - you’re using the decorator to tell Angular that this service will be available everywhere (hence the root).
// Expressing this dependency (to HttpClient) in the constructor tells Angular to inject an HttpClient into this class—its dependency injection again.
// Final conclu: When invoking the getJSON function from another class, you'll benefit from TypeScript's features because it will know what the method returns and won't let you use the result like a string or something else.

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Quiz, Question } from "./quiz.model";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public getQuizzes() {
    return this.http.get(`./assets/quiz-list.json`).pipe(
      map((result: any[]) => {
        return result.map(
          r => new Quiz(r.label, r.name, r.description, r.fileName)
        );
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }
}
