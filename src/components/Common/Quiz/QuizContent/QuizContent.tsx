import { useTranslation } from "react-i18next";
import { QuizContentPropsI } from "./quizContent.types";
import styles from "./quizContent.module.scss";
import { useMemo } from "react";
import { Radio } from "components";

function QuizContent({ question, actualQuestion }: QuizContentPropsI) {
  const answers = useMemo(
    () =>
      question ? [...question.incorrect_answers, question.correct_answer] : [],
    [question]
  );
  const { t } = useTranslation();
  return (
    <div className={styles["quiz-content"]}>
      <p>
        {t("question")} {actualQuestion + 1}:
      </p>
      <h2 dangerouslySetInnerHTML={{ __html: `${question?.question}` }} />
      <Radio id="radio-1" name="radio-name" label="label" checked={true} />
    </div>
  );
}

export default QuizContent;
