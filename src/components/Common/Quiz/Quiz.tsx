import { useState } from "react";
import { QuizFooter, Card, Loader, QuizContent } from "components";
import { useFetch } from "hooks";
import { QuizI } from "types/quiz.types";
import styles from "./quiz.module.scss";

function Quiz() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [data, loading, error] = useFetch<QuizI>(
    "https://opentdb.com/api.php?amount=5"
  );
  return (
    <Card className={styles.quiz}>
      {loading ? (
        <Loader className={styles.quiz__loader} />
      ) : (
        <>
          <QuizContent
            question={data?.results[actualQuestion]}
            actualQuestion={actualQuestion}
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
