import { Card, Button } from "components";
import { useTranslation } from "react-i18next";
import { WelcomeBannerPropsI } from "components/Common/WelcomeBanner/welcomeBanner.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styles from "./welcomeBanner.module.scss";

function WelcomeBanner({ setIsWelcome }: WelcomeBannerPropsI) {
  const { t } = useTranslation();
  return (
    <Card className={styles["welcome-banner"]}>
      <h1>
        {t("welcome")} <FontAwesomeIcon icon={faLightbulb} />
      </h1>
      <Button
        onClick={() => setIsWelcome(false)}
        className={styles["welcome-banner__start-btn"]}
      >
        {t("start")}
      </Button>
    </Card>
  );
}

export default WelcomeBanner;
