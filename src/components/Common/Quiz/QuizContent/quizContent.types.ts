import { QuestionI } from "types/quiz.types";

export interface QuizContentPropsI {
  question: QuestionI | undefined;
  actualQuestion: number;
}
