export interface ResultsContextI {
  results: (string | null)[];
  isChecked: boolean;
  correctAnswers: number;
  rerender: string;
  setResults: (value: (string | null)[]) => void;
  setIsChecked: (value: boolean) => void;
  setCorrectAnswers: (value: number) => void;
  setRerender: (value: string) => void;
}
