import { ResultPropsI } from "components/Common/Result/result.types";
import { Card } from "components";
import { useTranslation } from "react-i18next";
import party from "party-js";
import { useEffect } from "react";
import styles from "./result.module.scss";

function Result({ numberOfCorrectAnswers, numberOfAnswers }: ResultPropsI) {
  const { t } = useTranslation();
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
    </Card>
  );
}

export default Result;
