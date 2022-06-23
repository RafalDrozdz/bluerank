import { useContext, useEffect, useState } from "react";
import { QuizFooter, Card, Loader, QuizContent } from "components";
import { useFetch } from "hooks";
import { QuizI } from "types/quiz.types";
import styles from "./quiz.module.scss";
import { ResultsContext } from "helpers/context";

function Quiz() {
  const resultsContext = useContext(ResultsContext);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [selectedIds, setSelectedIds] = useState<(string | null)[]>([]);

  const [data, loading, error] = useFetch<QuizI>(
    "https://opentdb.com/api.php?amount=5"
  );

  useEffect(() => {
    setSelectedIds(data?.results.map(() => null) ?? []);
  }, [data?.results]);

  useEffect(() => {
    console.log({ selectedIds });
    resultsContext?.setResults(selectedIds);
    resultsContext?.setCorrectAnswers(
      data?.results.filter((item) => selectedIds.includes(item.correct_answer))
        .length ?? 0
    );
  }, [selectedIds]);

  const addSelectedId = (actualQuestion: number, id: string | null) => {
    setSelectedIds(
      selectedIds.map((item, index) => (index === actualQuestion ? id : item))
    );
  };

  return (
    <Card className={styles.quiz}>
      {loading ? (
        <Loader className={styles.quiz__loader} />
      ) : (
        <>
          <QuizContent
            question={data?.results[actualQuestion]}
            actualQuestion={actualQuestion}
            selectedId={selectedIds[actualQuestion]}
            addSelectedId={addSelectedId}
          />
          <QuizFooter
            actualQuestion={actualQuestion}
            setActualQuestion={setActualQuestion}
          />
        </>
      )}
    </Card>
  );
}

export default Quiz;
