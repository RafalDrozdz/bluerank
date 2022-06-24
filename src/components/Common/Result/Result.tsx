import { ResultPropsI } from "components/Common/Result/result.types";
import { Button, Card } from "components";
import { useTranslation } from "react-i18next";
import party from "party-js";
import { useContext, useEffect } from "react";
import styles from "./result.module.scss";
import { ResultsContext } from "helpers/context";

function Result({ numberOfCorrectAnswers, numberOfAnswers }: ResultPropsI) {
  const { t } = useTranslation();
  const resultsContext = useContext(ResultsContext);
  useEffect(() => {
    party.confetti(document.body, {
      count: 60,
      size: 1.2,
      spread: 80,
    });
  }, []);
  return (
    <Card className={styles.result}>
      <h2>{t("congratulations")}</h2>
      {t("yourScore")}: {numberOfCorrectAnswers} / {numberOfAnswers}
      <Button
        className={styles["result__play-again-btn"]}
        onClick={() => resultsContext?.setIsChecked(false)}
      >
        {t("playAgain")}
      </Button>
    </Card>
  );
}

export default Result;
