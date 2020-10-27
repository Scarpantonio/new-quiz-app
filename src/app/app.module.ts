import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
//By passing HttpClientModule in the imports property of the object given to @NgModule, you’re telling Angular to make the HttpClientModule available.
import { HttpClientModule } from "@angular/common/http";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ResultsComponent } from "./results/results.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: ":quizId", component: QuestionsComponent },
  { path: "", redirectTo: "welcome", pathMatch: "prefix" }
];

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent, WelcomeComponent, QuestionsComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
