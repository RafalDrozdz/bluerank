export interface ResultsContextI {
  results: (string | null)[];
  isChecked: boolean;
  correctAnswers: number;
  setResults: (value: (string | null)[]) => void;
  setIsChecked: (value: boolean) => void;
  setCorrectAnswers: (value: number) => void;
}
