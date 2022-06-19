import { Card } from "../../Base";
import { useTranslation } from "react-i18next";

function WelcomeBanner() {
  const { t } = useTranslation();
  return (
    <Card>
      <h1>{t("welcome")}</h1>
    </Card>
  );
}

export default WelcomeBanner;
