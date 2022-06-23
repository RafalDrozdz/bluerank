import { useTranslation } from "react-i18next";
import { QuizContentPropsI } from "./quizContent.types";
import styles from "./quizContent.module.scss";
import { useEffect, useMemo, useState } from "react";
import { RadioGroup } from "components";

function QuizContent({
  question,
  actualQuestion,
  addSelectedId,
  selectedId,
}: QuizContentPropsI) {
  const [id, setId] = useState<string | null>(selectedId);

  useEffect(() => addSelectedId(actualQuestion, id), [id]);
  useEffect(() => setId(selectedId), [selectedId]);

  const answers = useMemo(
    () =>
      (question
        ? [...question.incorrect_answers, question.correct_answer].sort(
            () => 0.5 - Math.random()
          )
        : []
      ).map((answer: string) => ({
        id: answer,
        label: answer,
      })),
    [question]
  );
  const { t } = useTranslation();
  return (
    <div className={styles["quiz-content"]}>
      <p>
        {t("question")} {actualQuestion + 1}:
      </p>
      <h2 dangerouslySetInnerHTML={{ __html: `${question?.question}` }} />
      <RadioGroup
        list={answers}
        name={`quiz-content-${actualQuestion}`}
        selectedId={id}
        setSelectedId={setId}
      />
    </div>
  );
}

export default QuizContent;
