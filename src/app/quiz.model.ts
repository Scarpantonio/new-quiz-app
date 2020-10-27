//this file defines the structure of your application's model.
//The two main exposed classes are Quiz and Answers
// (the other ones are classes within those two).
// The former is a representation of the data you load and the latter represents the
//data your app will collect each time a user answers a question.

export class Choice {
  constructor(public value: string, public correct?: boolean) {}
}

export class Question {
  constructor(public label: string, public choices: Choice[]) {}
}

export class Quiz {
  constructor(
    public label: string,
    public name: string,
    public description: string,
    public fileName: string
  ) {}
}

export class Answers {
  constructor(public values: Choice[] = []) {}
}
