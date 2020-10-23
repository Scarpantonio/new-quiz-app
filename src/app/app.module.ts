import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
//By passing HttpClientModule in the imports property of the object given to @NgModule, you’re telling Angular to make the HttpClientModule available.
import { HttpClientModule } from "@angular/common/http";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, QuestionFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//hola
