import { Card, Button } from "components";
import { useTranslation } from "react-i18next";
import styles from "./welcomeBanner.module.scss";

function WelcomeBanner() {
  const { t } = useTranslation();
  const test = () => console.log("Welcome");
  return (
    <Card className={styles["welcome-banner"]}>
      <h1>{t("welcome")}</h1>
      <Button onClick={test}>{t("startQuiz")}</Button>
    </Card>
  );
}

export default WelcomeBanner;
