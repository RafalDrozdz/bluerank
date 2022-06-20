export interface QuizI {
  response_code: number;
  results: QuestionI[];
}

export interface QuestionI {
  category: string;
  correct_answer: string;
  difficulty: DifficultyOfQuestonEnum;
  incorrect_answers: string[];
  question: string;
  type: TypeOfQuestonEnum;
}

export enum DifficultyOfQuestonEnum {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export enum TypeOfQuestonEnum {
  boolean = "boolean",
  multiple = "multiple",
}
