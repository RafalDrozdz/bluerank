import { QuestionI } from "types/quiz.types";

export interface QuizContentPropsI {
  question: QuestionI | undefined;
  actualQuestion: number;
  addSelectedId: (actualQuestion: number, id: string | null) => void;
  selectedId: string | null;
}
