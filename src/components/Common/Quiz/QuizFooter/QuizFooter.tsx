import { Button } from "components";
import { useTranslation } from "react-i18next";
import { QuizFooterPropsI } from "./quizFooter.types";
import styles from "./quizFooter.module.scss";
import { useContext, useMemo } from "react";
import { ResultsContext } from "helpers";

function QuizFooter({ actualQuestion, setActualQuestion }: QuizFooterPropsI) {
  const { t } = useTranslation();
  const resultsContext = useContext(ResultsContext);
  const changeActualQuestion = (amount: 1 | -1) =>
    actualQuestion !== (amount < 0 ? 0 : 4) &&
    setActualQuestion(actualQuestion + amount);

  const isDisabled = useMemo(
    () =>
      actualQuestion === 4 &&
      (resultsContext?.results.includes(null) ||
        !resultsContext?.results.length),
    [actualQuestion, resultsContext?.results]
  );

  return (
    <div className={styles["quiz-footer"]}>
      <Button
        disabled={!actualQuestion}
        onClick={() => changeActualQuestion(-1)}
      >
        {t("previous")}
      </Button>
      <Button
        disabled={isDisabled}
        onClick={() =>
          actualQuestion === 4
            ? resultsContext?.setIsChecked(true)
            : changeActualQuestion(1)
        }
      >
        {actualQuestion === 4 ? t("check") : t("next")}
      </Button>
    </div>
  );
}

export default QuizFooter;
