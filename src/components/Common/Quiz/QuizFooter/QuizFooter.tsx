import { Button } from "components";
import { useTranslation } from "react-i18next";
import { QuizFooterPropsI } from "components/Common/Quiz/QuizFooter/quizFooter.types";
import styles from "./quizFooter.module.scss";

function QuizFooter({ actualQuestion, setActualQuestion }: QuizFooterPropsI) {
  const { t } = useTranslation();
  const changeActualQuestion = (amount: 1 | -1) =>
    actualQuestion !== (amount < 0 ? 0 : 4) &&
    setActualQuestion(actualQuestion + amount);

  return (
    <div className={styles["quiz-footer"]}>
      <Button onClick={() => changeActualQuestion(-1)}>{t("previous")}</Button>
      <Button onClick={() => changeActualQuestion(1)}>
        {actualQuestion === 4 ? t("check") : t("next")}
      </Button>
    </div>
  );
}

export default QuizFooter;
